import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsListComponent } from './requests-list/requests-list.component';
import { AngularMaterialsModule } from '../shared/angular-materials.module';
import { HttpClientModule } from '@angular/common/http';
// import { NewRequestComponent } from './new-request/new-request.component';
import { AutoChipComponent } from '../shared/auto-chip/auto-chip.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewRequestComponent } from './new-request/new-request.component';
 

@NgModule({
  declarations: [
    RequestsListComponent,
    // NewRequestComponent,
    AutoChipComponent,
    NewRequestComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RequestsListComponent,
    // NewRequestComponent,
    AutoChipComponent
  ]
})
export class RequestsModule { }