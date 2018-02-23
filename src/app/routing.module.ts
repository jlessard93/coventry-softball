import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "./core/auth.guard";
import {ScheduleComponent} from "./schedule/schedule.component";
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
  {path: 'schedule', component: ScheduleComponent, canActivate: [AuthGuard]},
  {path: '', component: HomeComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports:[
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} //<-- for debugging
    )
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule {}
