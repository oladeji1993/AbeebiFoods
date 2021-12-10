import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sideBarOpen: boolean = false;
  show = true;
  showMarketer = true;
  procurement = true;
  showprodManager = true;
  showprodManagerandQuality = true

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.checkRole()
  }

  sideBar(){
    document.getElementsByClassName('sidebar')[0].classList.add('showsidebar');
    this.sideBarOpen = true;
  }

  removeSideBar(){
    document.getElementsByClassName('sidebar')[0].classList.remove('showsidebar');
    this.sideBarOpen = false;
  }

  checkRole(){
    const role = localStorage.getItem('role')
    if(role == "2"){
      this.show = false;
      this.procurement = true;
      this.showMarketer = false;
      this.showprodManager = false;
      this.showprodManagerandQuality = false


    }else if(role == "1"){
      this.show = true;
      this.showMarketer = true;
      this.procurement = true;
      this.showprodManager = true
    }else if(role == "5"){
      this.show = false;
      this.procurement = false;
      this.showMarketer = true;
      this.showprodManager = false;
      this.showprodManagerandQuality = false


    }else if(role == "4"){
    this.show = false;
    this.procurement = false;
    this.showMarketer = false;
    this.showprodManager = true;
    this.showprodManagerandQuality = true


  }else if(role == "3"){
    this.show = false;
    this.procurement = true;
    this.showMarketer = false;
    this.showprodManager = false;
    this.showprodManagerandQuality = true
  }
}



  logOut(){
    console.log("hello")
    localStorage.removeItem('role');
    localStorage.removeItem('token')
    this.router.navigate(['Dashboard/login']);
  }

}
