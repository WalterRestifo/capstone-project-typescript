export interface Member {
  name: string;
  skill: string;
  languages: string[];
  gender: string;
  _id?: any;
}

export interface Criteria {
  skill: string;
  language: string;
  gender: string;
}
