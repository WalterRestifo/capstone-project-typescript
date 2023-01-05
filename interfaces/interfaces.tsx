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
