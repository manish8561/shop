import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: '<router-outlet></router-outlet>',
  styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
