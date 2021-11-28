import { AuthService } from '../../Services/auth/auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class IsLoggedIn {

    constructor(
        private router: Router,
    ) {}

    resolve(): void {
        const token = localStorage.getItem('token')
        const role = localStorage.getItem('role')
        if(token && role) {
            this.router.navigate(['Dashboard/home']);
        }else{
            this.router.navigate(['Dashboard/login']);
        }
    }
}
