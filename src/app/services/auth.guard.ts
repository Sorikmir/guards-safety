import { Injectable } from '@angular/core';
import {  CanActivate, GuardResult, MaybeAsync, Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router ) {

  }
canActivate(): MaybeAsync<GuardResult> {
  if(this.auth.isAuthentificated()){
    return true;
  }
  else{
    this.router.navigate(['/login'])
    return false;
  }
}
};
 
 