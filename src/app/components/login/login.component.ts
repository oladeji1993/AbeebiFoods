import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { AlertService } from 'src/app/Services/alert/alert.service';
import { NgxSpinnerService } from 'ngx-spinner';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signinForm!: FormGroup;
  public submitted = false;  
  token:any
  role:any

  constructor(
    private router: Router,
    public fb: FormBuilder,
    private auth: AuthService,
    private alert: AlertService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    }) 
  }

  get formControl() {
    return this.signinForm.controls;
  }

  signUp(){
    this.router.navigate(["/home/Signup"])
  }

  loginUser(){
    this.submitted = true;
    if(this.signinForm.invalid){
      return;
    }else{
      this.spinner.show()
      this.auth.loginUser(this.signinForm.value).subscribe((data:any)=>{
        if(data.status === 200){
          this.token = data.token;
          this.role = data.role 
          localStorage.setItem('token',  this.token);
          localStorage.setItem('role',  this.role);
          localStorage.setItem('user',  data.data.firstname);
          this.spinner.hide()
          this.router.navigate(['/Dashboard'])
          this.alert.showSuccess(data.message, 'Success');
        }else{
          this.spinner.hide()
          this.router.navigate(['home/login'])
          this.alert.showError(data.message, 'Error');
        }
      }, err =>{
        this.spinner.hide()
        let error = err.error
        this.alert.showError(error.message, 'Error');
        this.router.navigate(['home/login'])
      })
    }
  }

}
