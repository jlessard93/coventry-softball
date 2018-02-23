export class Player {
  id?: string;
  name: string;
  battingAvg: number;
  gamesPlayed: number;
  plateAppearances: number;
  atBats: number;
  runs: number;
  hits: number;
  singles: number;
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

  constructor() {
  }

  getData(): object {
    const result = {};
    Object.keys(this).map(key => result[key] = this[key]);
    return result;
  }
}
