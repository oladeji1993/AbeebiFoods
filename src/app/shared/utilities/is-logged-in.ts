import { AuthService } from '../../Services/auth/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class IsLoggedIn {

    constructor(
        private router: Router,
        private authService: AuthService
    ) {}

    resolve(): void {
        if(this.authService.userIsLoggedIn()){
            this.router.navigate(['Dashboard/home'])
        }
    }
}
