import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { IToken } from "../models/Token";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private loginUrl = 'http://localhost:3004/auth/login'
  private checkUrl = 'http://localhost:3004/auth/userInfo'

  constructor(private httpClient: HttpClient) {
  }

  public login2(login: string, password: string): void {
    this.httpClient.post<IToken>(this.loginUrl, {'password': password, 'login': login}).subscribe((value: IToken) => {
      let {token} = value
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

  public isAuthenticated(): Observable<boolean> {
    const token = localStorage.getItem('token')

    return this.httpClient.post(this.checkUrl, {'token': token}).pipe(
      map((user: any) => {
        let fakeToken = user.fakeToken
        return (token === fakeToken)
      })
    )
  }

  public getUserInfo(): any {
    const token = localStorage.getItem('token');
    return this.httpClient.post(this.checkUrl, {'token': token})
  }

}
