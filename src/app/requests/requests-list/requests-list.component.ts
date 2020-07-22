
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RequestsService } from '../requests.service';
import { TitleService } from 'src/app/shared/title.service';
 
export interface Request {
  pmcr: number;
  pmrq: number;
  equipment: number;
  component: number;
  title: string;
  status: string;
  owner: string;
  by: string;
  last: string;
  due: string;
}
 
@Component({
  selector: 'requests-list',
  templateUrl: './requests-list.component.html',
  styleUrls: ['./requests-list.component.scss']
})
 
export class RequestsListComponent implements OnInit {
  screenTitle: string;
  requestData: Request[];
  status: string;
  displayedColumns = ['component', 'title', 'status', 'owner','due'];
  dataSource: any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  myFilterValue = '';
 
  constructor(
    private titleService: TitleService,
    private activatedRoute: ActivatedRoute,
    private requestsService: RequestsService,
    private router: Router
  ) { }
 
  ngOnInit() {
    this.titleService.changeTitle('PMCRs');
    this.getRequests();

    this.getRouteParam();
  }
 
  newRequest() {
    this.router.navigate(['/new-request']);
    return true;
  }
 
  getRouteParam(): any {
    this.activatedRoute.paramMap.subscribe(params => {
      this.status = params.get("status");
      this.getRequests();
      return this.status;
    });
  }
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue ? filterValue.trim().toLowerCase() : '';
    // return filterValue;
  }
 
  resetFilter(event: Event) {
    this.myFilterValue = '';
    this.dataSource.filter = '';
  }
 
  getRequests(): any {
    this.requestsService.getData()
    .subscribe(
      data => {
        this.requestData = data;
        console.log("Data: ", this.requestData);
        this.dataSource = new MatTableDataSource<Request>(this.requestData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.myFilterValue = this.status;
        this.dataSource.filter = this.myFilterValue ? this.myFilterValue.trim().toLowerCase() : '';
        // if(this.status != 'all') {
        //   this.myFilterValue = this.status;
        //   this.dataSource.filter = this.myFilterValue ? this.myFilterValue.trim().toLowerCase() : '';
        // }
      },
      // onError
      error => console.log(error)
    )
  }
}
 