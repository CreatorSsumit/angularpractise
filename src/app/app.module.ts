import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { ShowComponent } from './show/show.component';
import { DirectivesComponent } from './directives/directives.component';
import { StyleDirective } from './directives/style.directive';


@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    ThirdComponent,
    ShowComponent,
    DirectivesComponent,
    StyleDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
