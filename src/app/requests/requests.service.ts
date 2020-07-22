import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class RequestsService {
  private dataUrl: string = 'assets/api/requests.json' // 'http://localhost:3000/requests';
  data: any;
 
  constructor(private http: HttpClient) { }
 
  getData() {
    this.data = this.http.get(this.dataUrl);
    return this.data;
  }
 
}
