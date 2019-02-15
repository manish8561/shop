import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-ffooter',
  templateUrl: './ffooter.component.html',
  styleUrls: [
    './ffooter.component.css'
  ]
})
export class FfooterComponent implements OnInit {
  error = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  unlock(event){
    event.preventDefault();
    this.router.navigate(['/dashboard'])
  }
  save(newsletter){
    this.error = false;
    if(newsletter.invalid){
      this.error = true;
    } else {
      console.log(newsletter.value);
    }
    
  }
}
