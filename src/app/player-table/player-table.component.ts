import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Player} from '../classes/player';
import {Observable} from 'rxjs';

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
