import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { Observable } from "rxjs";

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('is logged in?', () => {
    service.login('email', 'password');
    const loggedIn: Observable<boolean> = service.isAuthenticated();
    expect(loggedIn).toBeTruthy();
  });

  it('check user email', () => {
    service.login('email', 'password');
    const email: string | null = localStorage.getItem('email');
    expect(email).toBe('email');
  });

  it('check user password', () => {
    service.login('email', 'password');
    const password: string | null = localStorage.getItem('password');
    expect(password).toBe('password');
  });

  it('is logged out?', () => {
    service.login('email', 'password');
    service.logOut();
    const loggedIn: Observable<boolean> = service.isAuthenticated();
    expect(loggedIn).toBeFalse();
  });

  it('get user info', () => {
    service.login('email', 'password');
    const info: object = service.getUserInfo();
    expect(info).toEqual({email: 'email', password: 'password'});
  });
});
