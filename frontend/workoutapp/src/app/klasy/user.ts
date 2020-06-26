import { Wymiary } from './wymiary';

export class User {
    uzytkownik_id: number;
    nazwisko: string;
   login: string;
    password: string;
    opis:string;
    imie: string;
    data_rejestracji:Date;
    listaWymiarow :Array<Wymiary>=new Array<Wymiary>();
  
}
