import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsrecordComponent } from './studentsrecord/studentsrecord.component';
import { HttpClientModule } from '@angular/common/http';
import { DeletestudentsComponent } from './studentsrecord/deletestudents/deletestudents.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsrecordComponent,
    DeletestudentsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
