import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './commponents/add/add.component';
import { DetailsComponent } from './commponents/details/details.component';
import { ListViewComponent } from './commponents/list-view/list-view.component';
import { SearchComponent } from './commponents/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'list', component: ListViewComponent },
  { path: 'add', component: AddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
