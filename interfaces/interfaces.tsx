export interface Member {
  name: string;
  skill: string;
  languages: string[];
  gender: string;
  _id?: any;
  cloudinarySrc: string;
}

export interface Criteria {
  skill: string;
  language: string;
  gender: string;
}

export interface MiniPlayer {
  name: string;
  cloudinarySrc: string;
}

export interface Team {
  players: MiniPlayer[];
  points?: number;
}
