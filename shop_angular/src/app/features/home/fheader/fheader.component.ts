import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-fheader',
  templateUrl: './fheader.component.html',
  styleUrls: [
    './fheader.component.css'
  ]
})
export class FheaderComponent implements OnInit {
  loggedin = true;  
  constructor(private router: Router) { }

  ngOnInit() {
    this.checklogin();
  }
  checklogin() {
    if (localStorage.getItem('logged') === 'yes') {
      // console.log('hit by login');
      this.loggedin = true;
    } else {
      this.loggedin = false;
    }
  }
  unlock(event) {
    event.preventDefault();
    this.router.navigate(['/dashboard'])
  }
  logout() {
    this.loggedin = false;
    localStorage.removeItem('logged');
    this.router.navigate(['/home/login']);
  }
  refresh(){
    location.reload();
  }
}
