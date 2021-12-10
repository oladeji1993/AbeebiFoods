import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuardGuard implements CanActivate {

  constructor(){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthorised(route);
  }

  private isAuthorised(route: ActivatedRouteSnapshot): boolean {
    const localRoles = ['1','2','3','4','5']
    const expectedRoles = route.data.role;
    const matchRoute = localRoles.findIndex(role => expectedRoles.indexOf(role) !== -1);
    return matchRoute < 0 ? false : true
  }
  
}
