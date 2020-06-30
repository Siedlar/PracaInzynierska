import { Cwiczenia } from './cwiczenia';

export class Plan {
  plan_id: number;
  data: Date;
  czas_trwania: number;
  listaCwiczen: Array<Cwiczenia>;
}

