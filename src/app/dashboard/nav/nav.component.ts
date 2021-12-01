import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  show = true;
  showMarketer = true;
  procurement = true;
  showprodManager = true

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.checkRole()
  }

  checkRole(){
    const role = localStorage.getItem('role')
    if(role == "2"){
      this.show = false;
      this.procurement = true;
      this.showMarketer = false;
      this.showprodManager = false

    }else if(role == "1"){
      this.show = true;
      this.showMarketer = true;
      this.procurement = true;
      this.showprodManager = true
    }else if(role == "5"){
      this.show = false;
      this.procurement = false;
      this.showMarketer = true;
      this.showprodManager = false

    }else if(role == "4"){
    this.show = false;
    this.procurement = false;
    this.showMarketer = false;
    this.showprodManager = true;

  }
  }

  logOut(){
    console.log("hello")
    localStorage.removeItem('role');
    localStorage.removeItem('token')
    this.router.navigate(['Dashboard/login']);
  }

}
