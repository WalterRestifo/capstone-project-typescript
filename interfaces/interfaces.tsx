export interface Member {
  name: string;
  skill: string;
  language: string[];
  gender: string;
  criteria?: string;
}

export interface Criteria {
  skill: string;
  language: string;
  gender: string;
}
