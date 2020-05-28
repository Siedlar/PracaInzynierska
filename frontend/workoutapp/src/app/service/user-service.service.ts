import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../klasy/user';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class UserServiceService {

  constructor(private http: HttpClient) {
  }
  register(user: User) {
    return this.http.post('http://localhost:8080/users/register', user);
}
}
