import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "../../services/auth.service";

@Injectable({
  providedIn: 'root'
})

export class NotAuthGuard implements CanActivate {

  constructor(private authService: AuthService) {
  }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean  {
    return this.authService.isAuthenticated()
  }
}
