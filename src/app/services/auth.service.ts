import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(email:string, password:string): any {
    localStorage.setItem('email',email)
    localStorage.setItem('password',password)
  }

  logOut(): any {
    localStorage.clear()
  }

  isAuthenticated(): boolean {
    return false;
  }

  getUserInfo(): any {
    return null;
  }
}
