import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RequestsListComponent } from './requests/requests-list/requests-list.component';
import { AssetGroupListComponent } from './assets/asset-group-list/asset-group-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', data: {animation: 'home'} },
  { path: 'home', component: HomeComponent, data: {animation: 'home'} },
  { path: 'requests', component: RequestsListComponent },
  { path: 'assets', component: AssetGroupListComponent }
  
  // Lazy Loading modules don't need import
  // {
  //   path: 'lazy',
  //   loadChildren: './lazy.module#LazyModule',
  //   data: { animation: 'lazy' }
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
