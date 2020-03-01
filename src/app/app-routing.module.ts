import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonDetailComponent} from './person-detail.component';
import {PersonListComponent} from './person-list.component';
import {HomeComponent} from './home.component';
import {NotFoundComponent} from './not-found.component'


const routes: Routes = [
  { path: 'persons/:id', component: PersonDetailComponent},
  { path: 'persons', component: PersonListComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
