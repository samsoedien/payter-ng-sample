import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent, DetailsComponent, NewItemComponent } from './components';

const routes: Routes = [
  { path: 'items', children: [
    { path: 'overview', component: OverviewComponent },
    { path: 'details/:id', component: DetailsComponent },
    { path: 'new', component: NewItemComponent },
  ]},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
