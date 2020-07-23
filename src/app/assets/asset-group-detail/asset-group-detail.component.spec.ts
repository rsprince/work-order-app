import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetGroupDetailComponent } from './asset-group-detail.component';

describe('AssetGroupDetailComponent', () => {
  let component: AssetGroupDetailComponent;
  let fixture: ComponentFixture<AssetGroupDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetGroupDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetGroupDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
