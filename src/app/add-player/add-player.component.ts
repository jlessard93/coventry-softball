import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Player} from '../classes/player';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {
  player: Observable<Player>;
  players: any;
  submitted = false;
  name: string;

  constructor(private afs: AngularFirestore) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
  }

  addPlayer() {
    const newPlayer = new Player();
    newPlayer.name = this.name;
    newPlayer.battingAvg = 0;
    newPlayer.gamesPlayed = 0;
    newPlayer.plateAppearances = 0;
    newPlayer.atBats = 0;
    newPlayer.runs = 0;
    newPlayer.hits = 0;
    newPlayer.singles = 0;
    newPlayer.doubles = 0;
    newPlayer.triples = 0;
    newPlayer.homeRuns = 0;
    newPlayer.rbis = 0;
    newPlayer.walks = 0;
    newPlayer.strikeouts = 0;
    newPlayer.sacrificeFlies = 0;
    newPlayer.totalBases = 0;
    newPlayer.obp = 0;
    newPlayer.slg = 0;
    newPlayer.ops = 0;
    this.afs.collection('players').add(<Player> newPlayer.getData());
  }

}
