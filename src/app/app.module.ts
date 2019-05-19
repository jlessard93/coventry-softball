import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {ScheduleComponent} from './schedule/schedule.component';
import {UpdatePlayerComponent} from './update-player/update-player.component';
import {AddPlayerComponent} from './add-player/add-player.component';
import {HomeComponent} from './home/home.component';
import {PlayerTableComponent} from './player-table/player-table.component';
import {NavigationComponent} from './navigation/navigation.component';
import {CoreModule} from '../core/core.module';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthGuard} from '../core/auth.guard';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AddPlayerComponent,
    NavigationComponent,
    PlayerTableComponent,
    ScheduleComponent,
    HomeComponent,
    UpdatePlayerComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    FormsModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
