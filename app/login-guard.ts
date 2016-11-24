import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

import { LoginService } from './autenticacao/login-service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ){}

  canActivate() {
    if (this.loginService.logado()) {
      return true;
    }
    this.router.navigate(['/login']);
  }
}
