import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProblemlistComponent } from './components/problemlist/problemlist.component';
import { ProblemdetailComponent } from './components/problemdetail/problemdetail.component';

import { DataService } from './services/data.service';

import { routing } from './app.routes';
import { NewproblemComponent } from './components/newproblem/newproblem.component';

@NgModule({
  declarations: [
    AppComponent,
    ProblemlistComponent,
    ProblemdetailComponent,
    NewproblemComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
