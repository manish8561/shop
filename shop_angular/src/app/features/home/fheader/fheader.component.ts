import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-fheader',
  templateUrl: './fheader.component.html',
  styleUrls: [
    './fheader.component.css'
  ]
})
export class FheaderComponent implements OnInit {
  loggedin = false;
  constructor(private router: Router) {
    if(localStorage.getItem('logged') === 'yes'){
      this.loggedin = true;
    }
   }

  ngOnInit() {
  }

  unlock(event){
    event.preventDefault();
    this.router.navigate(['/dashboard'])
  }
  logout(){
    this.loggedin=false;
    localStorage.removeItem('logged');
    this.router.navigate(['/home'])
  }
}
