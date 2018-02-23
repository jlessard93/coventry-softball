import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {FormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AddPlayerComponent } from './add-player/add-player.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PlayerTableComponent } from './player-table/player-table.component';
import {CoreModule} from "./core/core.module";
import {AuthGuard} from "./core/auth.guard";
import {RoutingModule} from "./routing.module";
import { ScheduleComponent } from './schedule/schedule.component';
import { HomeComponent } from './home/home.component';
import { UpdatePlayerComponent } from './update-player/update-player.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPlayerComponent,
    NavigationComponent,
    PlayerTableComponent,
    ScheduleComponent,
    HomeComponent,
    UpdatePlayerComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    FormsModule,
    NgbModule.forRoot(),
    CoreModule,
    RoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
