import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AssetsService } from '../assets.service';
import { TitleService } from 'src/app/shared/title.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'asset-group-list',
  templateUrl: './asset-group-list.component.html',
  styleUrls: ['./asset-group-list.component.scss']
})
 
export class AssetGroupListComponent implements OnInit {
  requestData: any = [];
  displayedColumns = ['id', 'name', 'description', 'owner', 'last'];
  dataSource: any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  myFilterValue = '';
  selectedRowIndex: number;
 
  constructor(
    private titleService: TitleService,
    private assetsService: AssetsService,
    private router: Router
  ) { }
 
  ngOnInit(): void {
    this.titleService.changeTitle('Asset Groups');
    this.getAssetGroups();
  }
 
  newAssetGroup() {
    alert("Add Asset Group...");
    return true;
  }
 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue ? filterValue.trim().toLowerCase() : '';
    return true;
  }
 
  resetFilter(event: Event) {
    this.myFilterValue = '';
    this.dataSource.filter = '';
    return true;
  }
 
  getAssetGroups(): any {
    this.assetsService.getAssetGroups()
    .subscribe(
      data => {
        this.requestData = data;
        this.dataSource = new MatTableDataSource<Request>(this.requestData);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      // onError
      error => console.log(error)
    )
  }
 
  selectRow(row){
    console.log('Clicked row: ', row);
    this.selectedRowIndex = row.id;
    this.router.navigate(['assets/group-detail', row.name]);
    return true;
  }
 
}
