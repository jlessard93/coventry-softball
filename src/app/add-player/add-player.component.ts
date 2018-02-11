import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "angularfire2/firestore";
import {Player} from "../interfaces/player";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {
  playerCollection: AngularFirestoreCollection<Player>;
  playerDoc: AngularFirestoreDocument<Player>;
  player: Observable<Player>;
  players: any;
  submitted = false;
  name: string;
  battingAvg: number;
  gamesPlayed: number;
  plateAppearances: number;
  atBats: number;
  runs: number;
  hits: number;
  doubles: number;
  triples: number;
  homeRuns: number;
  rbis: number;
  walks: number;
  strikeouts: number;
  sacrificeFlies: number;
  totalBases: number;
  obp: number;
  slg: number;
  ops: number;

  constructor(private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.playerCollection = this.afs.collection('players');
    this.players = this.playerCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Player;
        const id = a.payload.doc.id;
        return {id, data};
      })
    })
  }

  onSubmit() {
    this.submitted = true;
  }

  addPlayer() {
    this.battingAvg = 0;
    this.gamesPlayed = 0;
    this.plateAppearances = 0;
    this.atBats = 0;
    this.runs = 0;
    this.hits = 0;
    this.doubles = 0;
    this.triples = 0;
    this.homeRuns = 0;
    this.rbis = 0;
    this.walks = 0;
    this.strikeouts = 0;
    this.sacrificeFlies = 0;
    this.totalBases = 0;
    this.obp = 0;
    this.slg = 0;
    this.ops = 0;
    this.afs.collection('players').add({
      name: this.name,
      battingAvg: this.battingAvg,
      gamesPlayed: this.gamesPlayed,
      plateAppearances: this.plateAppearances,
      atBats: this.atBats,
      runs: this.runs,
      hits: this.hits,
      doubles: this.doubles,
      triples: this.triples,
      homeRuns: this.homeRuns,
      rbis: this.rbis,
      walks: this.walks,
      strikeouts: this.strikeouts,
      sacrificeFlies: this.sacrificeFlies,
      totalBases: this.totalBases,
      obp: this.obp,
      slg: this.slg,
      ops: this.obp
    })
  }

}
