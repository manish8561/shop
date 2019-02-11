import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./../home.component.css']
})
export class ContactComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('logged') === 'yes') {
      this.router.navigate(['/home/dashboard'])
    }
  }

  contact(event) {
    //console.log(event);
    event.preventDefault();
    localStorage.setItem('logged', 'yes');
    this.router.navigate(['/home/dashboard']);
  }

}
