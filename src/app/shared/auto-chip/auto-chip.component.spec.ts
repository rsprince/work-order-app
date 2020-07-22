import { async, ComponentFixture, TestBed } from '@angular/core/testing';
 
import { AutoChipComponent } from './auto-chip.component';
import { AngularMaterialsModule } from 'src/app/core/angular-materials.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
 
describe('AutoChipComponent', () => {
  let component: AutoChipComponent;
  let fixture: ComponentFixture<AutoChipComponent>;
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoChipComponent ],
      imports: [ AngularMaterialsModule, BrowserAnimationsModule ]
    })
    .compileComponents();
  }));
 
  beforeEach(() => {
    fixture = TestBed.createComponent(AutoChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('selected() should be defined', () => {
    expect(component.selected).toBeDefined();
  });
});
