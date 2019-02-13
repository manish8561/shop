import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./../home.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
