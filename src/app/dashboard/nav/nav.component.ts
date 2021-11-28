import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  show = true;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.checkRole()
  }

  checkRole(){
    const role = localStorage.getItem('role')
    if(role == "2"){
      this.show = false
    }else if(role == "1"){
      this.show = true
    }
  }

  logOut(){
    console.log("hello")
    localStorage.removeItem('role');
    localStorage.removeItem('token')
    this.router.navigate(['Dashboard/login']);
  }

}
