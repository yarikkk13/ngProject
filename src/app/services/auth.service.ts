import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  public login(email: string, password: string): void {
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
  }

  public logOut(): void {
    localStorage.clear()
  }

  public isAuthenticated(): boolean {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    return !!(email && password);
  }

  public getUserInfo(): any {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    return {email, password};
  }
}
