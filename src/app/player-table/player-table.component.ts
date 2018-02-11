import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {Player} from "../interfaces/player";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.scss']
})
export class PlayerTableComponent implements OnInit {
  private playerCollection: AngularFirestoreCollection<Player>;
  players$: Observable<Player[]>;

  constructor(private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.playerCollection = this.afs.collection<Player>('players');
    this.players$ = this.playerCollection.valueChanges();
  }

}
