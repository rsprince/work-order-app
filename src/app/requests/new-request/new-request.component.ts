import { Component, OnInit, ViewChild } from '@angular/core';
import { TitleService } from 'src/app/shared/title.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AssetsService } from 'src/app/assets/assets.service';
import { MatTableDataSource } from '@angular/material/table';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { DataSource } from '@angular/cdk/table';
import { Observable, of } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { Router } from '@angular/router';

@Component({
  selector: 'new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class NewRequestComponent implements OnInit {
  displayedColumns = ['select', 'componentId', 'pmid', 'ecode', 'description', 'fid', 'fidDriver', 'status', 'dueDate', 'action' ];
  // data = Object.assign(testData);
  dataSource = new ExampleDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  // expanding row
  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');

  expandedElement: any;
  showTable: boolean = false;
  form: any = {search: ''};
  action: any = {add: ''};
  actions = [];
  note: any = {add: ''};
  notes = [];
  justification: any = {add: ''};
  justifications = [];
  requestStatus: string = 'draft';
  evaluators = [];

  // select item for delete
  selection = new SelectionModel<any>(true, []);

  constructor(
    private titleService: TitleService, //service to put name on menu
    private assetsService: AssetsService, // service
    private router: Router
  ) { }

  initiationType = [
    'Component ID',
    'PM Work Order',
    'PMRQ',
    'PMID'
  ];

  initiationFacility = [
    '-- Select --',
    'PTN',
    'PBS',
    'New',
    'Yet Another Facility'
  ];

  defaultInitiationType = 'Component ID';
  defaultFacility = '-- Select --';

  ngOnInit(): void {
    this.titleService.changeTitle('Initiate PMCR');
    console.log("Test Data: ", testData);
    this.getUsers();
  }

  getUsers() {
    this.assetsService.getAssetGroups()
    .subscribe(
      users => {
        users.forEach(item => this.evaluators.push(item.owner));
      }
    )
  }
   /** Whether the number of selected elements matches the total number of rows. */
   isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = testData.length;
    // const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  removeSelectedRows() {
    this.selection.selected.forEach(item => {
      let index: number = testData.findIndex(d => d === item);
      console.log(testData.findIndex(d => d === item));
      testData.splice(index,1);
      this.dataSource = new MatTableDataSource<any>(testData);
    });
    this.selection = new SelectionModel<Element>(true, []);
    // console.log("New TestData: ", testData);
    return true;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if(testData) {
      this.isAllSelected() ?
      this.selection.clear() :
      testData.forEach(row => this.selection.select(row));
    }
  }

  // get Item by Component Id
  getItem() {
    this.assetsService.getAssetById(this.form.search)
    .subscribe(
      response => {
        this.showTable = true;
        // response is an array with one or more objects, so get the first one only.
        // testData has already been initialized as an array.
        let newComponent = response[0];
        testData.push(newComponent);
        // declare it again to refresh the table.
        this.dataSource = new ExampleDataSource();
        this.form.search = '';
        console.log("New TestData: ", testData);

      }

    ),
    error => console.log("Error: ", error)
  }
  saveDraft() {
    alert("Save Draft");
    return true;
  }

  submitRequest() {
    this.requestStatus = "initiated";
    this.titleService.changeTitle('Review PMCR');
    window.scroll(0, 0);
    // this.router.navigate(['/requests/all']);
    return true;
  }

  addAction() {
    this.actions.push(this.action.add);
    this.action.add = '';
  }

  addNotes() {
    this.notes.push(this.note.add);
    this.note.add = '';
  }

  addJustification() {
    this.justifications.push(this.justification.add);
    this.justification.add = '';
  }

}

let testData = [];

export class ExampleDataSource extends DataSource<any> {
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<any[]> {
    const rows = [];
    if(testData) {
      testData.forEach(element => rows.push(element, { detailRow: true, element }));
      // console.log(rows);
      return of(rows);
    }
  }

  disconnect() { }
}