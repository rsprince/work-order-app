import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialsModule } from '../shared/angular-materials.module';
import { AssetGroupDetailComponent } from './asset-group-detail/asset-group-detail.component';
import { AssetGroupListComponent } from './asset-group-list/asset-group-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
@NgModule({
  declarations: [
    AssetGroupListComponent,
    AssetGroupDetailComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AssetGroupListComponent
  ]
})
export class AssetsModule { }