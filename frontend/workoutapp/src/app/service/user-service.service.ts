import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../klasy/user';
import { Wymiary } from '../klasy/wymiary';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class UserServiceService {


  constructor(private http: HttpClient) {
  }
  register(user: User) {
    return this.http.post('http://localhost:8080/users/register', user, {responseType: 'text'});
}
getUser(username:string){
  return this.http.get<User>('http://localhost:8080/users/dane/'+username);
}
login(user:User){
  return this.http.post<User>('http://localhost:8080/users/logowanie',user);
}
  dodajpomiar(user: User) { 
    return this.http.post('http://localhost:8080/users/zapisz',user, {responseType: 'text'});
  }
  usunpomiar(id_wymiar: number) { 
    return this.http.delete('http://localhost:8080/users/usunWymiar/'+id_wymiar,{responseType: 'text'});
  }
  usunplan(id_wymiar: number) { 
    return this.http.delete('http://localhost:8080/users/usunPlan/'+id_wymiar,{responseType: 'text'});
  }
  wyslijplan(user: User) { 
    return this.http.post('http://localhost:8080/users/dodajPlan',user,{responseType: 'text'})
  }
}
