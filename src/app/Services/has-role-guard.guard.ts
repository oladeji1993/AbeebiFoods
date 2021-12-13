import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IsLoggedIn } from '../shared/utilities/is-logged-in';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuardGuard implements CanActivate {

  constructor(private router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuthorised(route);
  }

  private isAuthorised(route: ActivatedRouteSnapshot): boolean {
    const localRoles = localStorage.getItem("role")
    const expectedRoles = route.data.role;
    if(expectedRoles.includes(localRoles)) {
      return true;
    }
    this.router.navigate(['Dashboard/home']);
    return false;
  }
  
}
