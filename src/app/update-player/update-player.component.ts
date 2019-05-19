import {Component, OnInit} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Player} from '../classes/player';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.scss']
})
export class UpdatePlayerComponent implements OnInit {
  playerCollection: AngularFirestoreCollection<Player>;
  player$: Observable<Player>;
  players: any;
  aPlayer: Player;
  submitted = false;

  constructor(private afs: AngularFirestore) {
  }

  ngOnInit() {
    this.aPlayer = new Player();
    this.playerCollection = this.afs.collection<Player>('players');
    this.players = this.playerCollection.snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Player;
        const id = a.payload.doc.id;
        return {id, ...data};
      });
    }));
  }

  onSubmit() {
    this.submitted = true;
  }

  getPlayer(player) {
    this.aPlayer = player;
  }

  updatePlayer(player) {
    const hits = this.calculateHits(player.singles, player.doubles, player.triples, player.homeRuns);
    const atBats = this.calculateAtBats(player.plateAppearances, player.walks, player.sacrificeFlies);
    const obp = this.calculateObp(hits, player.walks, atBats, player.sacrificeFlies);
    const totalBases = this.calculateTotalBases(player.singles, player.doubles, player.triples, player.homeRuns);
    const slg = this.calculateSlg(totalBases, atBats);
    const battingAverage = this.calculateBattingAvg(hits, atBats);
    const ops = this.calculateOps(obp, slg);

    this.playerCollection.doc(player.id).update({
      name: player.name,
      battingAvg: battingAverage,
      gamesPlayed: player.gamesPlayed,
      plateAppearances: player.plateAppearances,
      atBats: atBats,
      runs: player.runs,
      hits: hits,
      singles: player.singles,
      doubles: player.doubles,
      triples: player.triples,
      homeRuns: player.homeRuns,
      rbis: player.rbis,
      walks: player.walks,
      strikeouts: player.strikeouts,
      sacrificeFlies: player.sacrificeFlies,
      totalBases: totalBases,
      obp: obp,
      slg: slg,
      ops: ops
    });
  }

  calculateHits(singles, doubles, triples, homeRuns) {
    return (singles + doubles + triples + homeRuns);
  }

  calculateAtBats(plateAppearances, walks, sacrificeFlies) {
    // todo should be sacrifices instead of sac flies
    return (plateAppearances - walks - sacrificeFlies);
  }

  calculateObp(hits, walks, atBats, sacFlies) {
    try {
      if ((atBats + walks + sacFlies) === 0) {
        throw new Error('Divide by zero error');
      } else {
        return ((hits + walks) / (atBats + walks + sacFlies));
      }
    } catch (e) {
      console.log(e.message);
      return 0;
    }
  }

  calculateTotalBases(singles, doubles, triples, homeRuns) {
    return (1 * singles) + (2 * doubles) + (3 * triples) + (4 * homeRuns);
  }

  calculateSlg(totalBases, atBats) {
    try {
      if (atBats === 0) {
        throw new Error('Divide by zero error');
      } else {
        return (totalBases / atBats);
      }
    } catch (e) {
      console.log(e.message);
      return 0;
    }
  }

  calculateBattingAvg(hits, atBats) {
    try {
      if (atBats === 0) {
        throw new Error('Divide by zero error');
      } else {
        return (hits / atBats);
      }
    } catch (e) {
      console.log(e.message);
      return 0;
    }
  }

  calculateOps(obp, slg) {
    return (obp + slg);
  }
}
