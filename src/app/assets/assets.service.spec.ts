import { TestBed } from '@angular/core/testing';
 
import { AssetsService } from './assets.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
 
describe('AssetsService', () => {
  let service: AssetsService;
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ HttpClientTestingModule, HttpClient, HttpHandler ]
    });
    service = TestBed.inject(AssetsService);
  });
 
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
 
  it('getAssetById', () => {
    service.getAssetById('12345')
    expect(service).toBeDefined();
  });

});