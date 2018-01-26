import {Component} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from "rxjs/Observable";

export class Player {
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  playersCollection: AngularFirestoreCollection<Player>;
  players: Observable<Player[]>;

  constructor(private db: AngularFirestore) {

  }

  ngOnInit() {
    this.playersCollection = this.db.collection('players');
    this.players = this.playersCollection.valueChanges();
  }

  addPlayer(aPlayer: Player) {
    // Add a new document with a generated id.
    this.db.collection("players").add({aPlayer})
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }
}
