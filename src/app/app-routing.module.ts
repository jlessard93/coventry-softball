import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScheduleComponent} from './schedule/schedule.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from '../core/auth.guard';

const APP_ROUTES: Routes = [
  {path: 'schedule', component: ScheduleComponent, canActivate: [AuthGuard]},
  {path: '', component: HomeComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {enableTracing: false})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
