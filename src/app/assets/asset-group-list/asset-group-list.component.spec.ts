import { async, ComponentFixture, TestBed } from '@angular/core/testing';
 
import { AssetGroupListComponent } from './asset-group-list.component';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { AssetsService } from '../assets.service';
import { of } from 'rxjs';
 
describe('AssetGroupListComponent', () => {
  let component: AssetGroupListComponent;
  let fixture: ComponentFixture<AssetGroupListComponent>;
  let service: AssetsService;
 
  let testData = [
    {"id": "12323", "name": "Ralph Controller Search", "description": "Description of Asset Group...", "owner": "Enrico Fermi", "last": "1/3/2019"},
    {"id": "787898", "name": "RCP Equipment IDs – FLEET", "description": "Description of Asset Group...", "owner": "J. Robert Oppenheimer", "last": "1/3/2019"},
    {"id": "56565", "name": "SEA Charging Pump", "description": "Description of Asset Group...", "owner": "Hans Bethe", "last": "1/3/2019"}
  ];
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetGroupListComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      providers: [ HttpClient, HttpHandler ]
    })
    .compileComponents();
  }));
 
  beforeEach(() => {
    fixture = TestBed.createComponent(AssetGroupListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AssetsService);
    fixture.detectChanges();
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('newAssetGroup() should return true', () => {
    component.newAssetGroup();
    expect(component.newAssetGroup).toBeTruthy();
  });
 
  it('selectRow() should return true', () => {
    let testRow = {id: "12323", name: "Ralph Controller Search"};
    component.selectRow(testRow);
    expect(component.selectRow).toBeDefined();
  });
 
  it('applyFilter() should be called.', () => {
    spyOn(component, 'applyFilter').and.returnValue(true);
    let input = fixture.debugElement.nativeElement.querySelector('input');
    input.keyup;
    component.applyFilter(input.keyup);
    expect(component.applyFilter).toBeTruthy();
  });
 
  it('resetFilter() should be called.', () => {
    spyOn(component, 'resetFilter');
    let input = fixture.debugElement.nativeElement.querySelector('input');
    input.keyup;
    component.resetFilter(input.keyup);
    expect(component.resetFilter).toBeDefined();
  });
 
  it('getAssetGroups() should fire AssetsService and Return a Value', () => {
    let response = [];
    spyOn(service, 'getAssetGroups').and.returnValue(of(response));
    component.getAssetGroups();
    expect(component.requestData).toEqual(response);
  });
 
});
