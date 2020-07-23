import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class AssetsService {
  private assetGroupsUrl: string = 'assets/api/asset-groups.json'; // 'http://localhost:3000/asset-groups';
  private assetsUrl: string = 'assets/api/assets.json'; // 'http://localhost:3000/assets';
  data: any;
 
  constructor(private http: HttpClient) { }
 
  getAssetGroups() {
    this.data = this.http.get(this.assetGroupsUrl);
    return this.data;
  }
 
  getAssets() {
    this.data = this.http.get(this.assetsUrl);
    return this.data;
  }
 
  getAssetById(componentId) {
    this.data = this.http.get(this.assetsUrl + '/' + componentId);
    return this.data;
  }
 
}