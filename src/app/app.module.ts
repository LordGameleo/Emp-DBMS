import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './commponents/add/add.component';
import { DetailsComponent } from './commponents/details/details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListViewComponent } from './commponents/list-view/list-view.component';
import { SearchComponent } from './commponents/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    DetailsComponent,
    ListViewComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
