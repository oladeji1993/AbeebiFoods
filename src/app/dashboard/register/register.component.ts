import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/Services/alert/alert.service';
import { MustMatch } from 'src/app/Services/must-match-validator';
import { AuthService } from './../../Services/auth/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  public submitted = false;
  allRoles!: any

  constructor(
    private router: Router,   
    public fb: FormBuilder,
    private authService: AuthService,
    private alert: AlertService


  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.compose([Validators.required])],
      lastname: ['', Validators.compose([Validators.required])],
      role_id: ['', Validators.compose([Validators.required])],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phonenumber: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
      confirmPassword: ['', Validators.compose([Validators.required])]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    })
    this.getRoles()
  }

  get formControl() {
    return this.registerForm.controls;
  }

  login(){
    this.router.navigate(["/home/login"])
  }
  
  registerUser(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }else{
      const { firstname, lastname, email, role_id, phonenumber, password } = this.registerForm.value
      const data = {
        firstname,
        lastname, 
        email, 
        role_id, 
        phonenumber, 
        password
      }
      this.authService.registerUser(data).subscribe((resp:any) =>{
        if(resp.status === 401){
          this.alert.showError(resp.message, 'Error');
          return
        }
        this.alert.showSuccess(resp.message, 'Success');
        this.registerForm.reset();
        console.log(resp)
      })
    }
  }

  getRoles(){
    this.authService.getRole().subscribe((response:any) =>{
      this.allRoles = response.data
    })
  }

}
