import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFirestoreModule} from "angularfire2/firestore";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AddPlayerComponent } from './add-player/add-player.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PlayerTableComponent } from './player-table/player-table.component';
import {FormsModule} from "@angular/forms";
import { UpdatePlayerComponent } from './update-player/update-player.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPlayerComponent,
    NavigationComponent,
    PlayerTableComponent,
    UpdatePlayerComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
