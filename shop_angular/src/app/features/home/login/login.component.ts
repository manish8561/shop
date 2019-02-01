import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./../home.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('logged') === 'yes') {
      this.router.navigate(['/home/dashboard'])
    }
  }

  login(event) {
    //console.log(event);
    event.preventDefault();
    localStorage.setItem('logged', 'yes');
    this.router.navigate(['/home/dashboard'])
  }

}
