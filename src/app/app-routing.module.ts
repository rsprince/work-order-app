import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RequestsListComponent } from './requests/requests-list/requests-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', data: {animation: 'home'} },
  { path: 'home', component: HomeComponent, data: {animation: 'home'} },
  { path: 'requests', component: RequestsListComponent },
  
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
