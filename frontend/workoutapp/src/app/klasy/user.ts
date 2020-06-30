import { Wymiary } from './wymiary';
import { Plan } from './plan';

export class User {
    uzytkownik_id: number;
    nazwisko: string;
   login: string;
    password: string;
    opis:string;
    imie: string;
    data_rejestracji:Date;
    listaWymiarow :Array<Wymiary>=new Array<Wymiary>();
    listaPlanow: Array<Plan>;
}
