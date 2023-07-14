import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ManageExamsModuleModule } from './modules/manage-exams-module/manage-exams-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ManageExamsModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
