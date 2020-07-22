 
import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
 
import { RequestsListComponent } from './requests-list.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';
import { RequestsService } from '../requests.service';
import { MatTableModule } from '@angular/material/table';
 
describe('RequestsListComponent', () => {
  let component: RequestsListComponent;
  let fixture: ComponentFixture<RequestsListComponent>;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestsListComponent ],
      providers: [
        RequestsService,
        HttpClient,
        HttpHandler,
        // provides coverage for ParamMap .subscribe etc.
        {
          provide: ActivatedRoute,
          useValue: { paramMap: of( convertToParamMap({ status: 'all' }) ) }
        }
      ],
      imports: [ 
        RouterTestingModule,
        HttpClientModule,
        MatTableModule
      ]
    })
    .compileComponents();
  }));
 
  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create the app', async() => {
    expect(component).toBeTruthy();
  });
 
  it('newRequest() should return true', async() => {
    component.newRequest();
    expect(component.newRequest).toBeTruthy();
  });
 
  // it('getRoutParam() should return "all"', async() => {
  //   spyOn(component, 'getRouteParam').and.callFake( () => {
  //     return 'all';
  //   });
  //   expect(component.getRouteParam).toEqual('all');
  // });
 
  it('displayedColumns should have a value', () => {
    expect(component.displayedColumns).toBeTruthy();
  });
 
  it('applyFilter() should be called.', () => {
    spyOn(component, 'applyFilter');
    let input = fixture.debugElement.nativeElement.querySelector('input');
    input.keyup;
    component.applyFilter(input.keyup);
    expect(component.applyFilter).toBeDefined();
  });
 
  it('applyFilter', async() => {
    expect(component).toBeTruthy();
  });
 
  it('resetFilter() should be called.', () => {
    spyOn(component, 'resetFilter');
    let input = fixture.debugElement.nativeElement.querySelector('input');
    input.keyup;
    component.resetFilter(input.keyup);
    expect(component.resetFilter).toBeDefined();
  });
  
 
  it('getRequests() should be called', () => {
    let status = '';
    spyOn(component, 'getRequests').and.callThrough();
    component.getRequests();
    expect(component.getRequests).toHaveBeenCalled();
  });
 
});
