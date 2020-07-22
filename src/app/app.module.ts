import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChromeComponent } from './chrome/chrome.component';
import { AngularMaterialsModule } from './shared/angular-materials.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RequestsModule } from './requests/requests.module';

@NgModule({
  declarations: [
    AppComponent,
    ChromeComponent,
    HomeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RequestsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
