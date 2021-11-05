import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/Services/must-match-validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  public submitted = false;

  constructor(
    private router: Router,   
    public fb: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.compose([Validators.required])],
      userName: ['', Validators.compose([Validators.required])],
      email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phonenumber: ['', [Validators.required, Validators.pattern("[0-9]{10}")]],
      confirmPassword: ['', Validators.compose([Validators.required])]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    })
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
      console.log(this.registerForm.value)
    }
  }

}
