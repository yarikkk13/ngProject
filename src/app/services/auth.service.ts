import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IToken} from "../models/Token";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private url = 'http://localhost:3004/auth/login'

  constructor(private httpClient: HttpClient) {
  }

  public login2(login: string, password: string): void {
    this.httpClient.post<IToken>(this.url, {'password': password, 'login': login}).subscribe((value: IToken) => {
      let { token } = value
      localStorage.setItem('token', token)
    })
  }

  public login(email: string, password: string): void {
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
  }

  public logOut(): void {
    localStorage.clear()
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token')
    return !!(token);

    // const email = localStorage.getItem('email');
    // const password = localStorage.getItem('password');
    // return !!(email && password);
  }

  public getUserInfo(): any {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    return {email, password};
  }
}
