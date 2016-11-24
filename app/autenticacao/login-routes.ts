import { Routes } from '@angular/router';

import { LoginComponent } from './login-component';
import { LogoutComponent } from './logout-component';
import { LoginService } from './login-service';
import { LoginGuard } from './../login-guard';


export const loginRoutes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'logout', component: LogoutComponent }
];

export const AUTH_PROVIDERS = [
	LoginGuard,
	LoginService
];

