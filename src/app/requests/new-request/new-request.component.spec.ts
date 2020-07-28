import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewRequestComponent } from './new-request.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AssetsService } from '../../assets/assets.service';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing'; 

describe('NewRequestComponent', () => {
  let component: NewRequestComponent;

  let fixture: ComponentFixture<NewRequestComponent>;

  let service: AssetsService;

  let testData = [

    {"id": "12323", "name": "Ralph Controller Search", "description": "Description of Asset Group...", "owner": "Enrico Fermi", "last": "1/3/2019"},

    {"id": "787898", "name": "RCP Equipment IDs – FLEET", "description": "Description of Asset Group...", "owner": "J. Robert Oppenheimer", "last": "1/3/2019"},

    {"id": "56565", "name": "SEA Charging Pump", "description": "Description of Asset Group...", "owner": "Hans Bethe", "last": "1/3/2019"}

  ];

 

  beforeEach(async(() => {

    TestBed.configureTestingModule({

      declarations: [ NewRequestComponent ],

      imports: [ RouterTestingModule, HttpClientTestingModule ], 

      providers: [ ],

    })

    .compileComponents();

  })

  );

 

  beforeEach(() => {

    fixture = TestBed.createComponent(NewRequestComponent);

    component = fixture.componentInstance;

    service = TestBed.inject(AssetsService);

    fixture.detectChanges();

  });

 

  it('should create', () => {

    expect(component).toBeTruthy();

  });

 

  // it('isAllSelected() defined', () => {

  //   component.isAllSelected();

  //   expect(component.isAllSelected).toBeDefined();

  // });

 

  it('removeSelectedRows() defined', () => {

    component.removeSelectedRows();

    expect(component.isAllSelected).toBeTruthy();

  });

 

  it('getUsers () should fire AssetsService and Return a Value', () => {

    let response = testData;

    spyOn(service, 'getAssetGroups').and.returnValue(of(response));

    component.getUsers();

    expect(testData).toEqual(response);

  });

 

  it('getItem() should fire AssetsService and Return a Value', () => {

    let response = testData;

    spyOn(service, 'getAssetById').and.returnValue(of(response));

    component.getItem();

    expect(testData).toEqual(response);

  });

 

  it('saveDraft()', () => {

    component.saveDraft();

    expect(component.saveDraft).toBeTruthy();

  });

});

 

