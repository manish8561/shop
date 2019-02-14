import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FheaderComponent } from "../../../features/home/fheader/fheader.component";

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styles: [`#slider {
    padding-bottom: 45px;
}
.pricing {
    position: absolute;
    right: 40%;
    top: 52%;
}`]
})
export class HomeLayoutComponent implements OnInit {
  loginpage = false;
  showslider = true;
  loggedin = false;
  @ViewChild(FheaderComponent) public fheaderComponent: FheaderComponent;
  constructor(private router: Router) {
    if (this.router.url.indexOf('/login') > -1) {
      this.loginpage = true;
    }
    if ((this.router.url.indexOf('/home') > -1)) {
      if (this.router.url.indexOf('/home/') > -1) {
        this.showslider = false;
      } else {
        this.showslider = true;
      }
    } else { 
      this.showslider = false; 
    }
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {      
      if (event instanceof NavigationEnd) {
        // console.log(event);
        if (event.url.indexOf('/login') > -1) {
          this.loginpage = true;
        } else {
          this.loginpage = false;
        }
        if ((event.url.indexOf('/home') > -1)) {
          if (event.url.indexOf('/home/') > -1) {
            this.showslider = false;
          } else {
            this.showslider = true;
          }
          this.fheaderComponent.checklogin();
        } else { 
          this.showslider = false; 
        }
      }
    });
  }  
}
