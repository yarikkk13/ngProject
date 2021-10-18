import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(email: string, password: string): void {
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
  }

  logOut(): void {
    localStorage.clear()
  }

  isAuthenticated(): boolean {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    return !!(email && password);
  }

  getUserInfo(): any {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    return { email, password };
  }
}
