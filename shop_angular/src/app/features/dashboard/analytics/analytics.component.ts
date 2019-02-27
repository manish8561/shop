import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";

import * as fromCalendar from "@app/core/store/calendar";

@Component({
  selector: "sa-analytics",
  templateUrl: "./analytics.component.html"
})
export class AnalyticsComponent implements OnInit {
  public calendar$;
  loggedUser:any;
  constructor(private store: Store<any>, private router: Router) {
    this.calendar$ = this.store.select(fromCalendar.getCalendarState);
    if (localStorage.getItem("logged") !== "yes") {
      // console.log('hit by login');
      this.router.navigate(["/home/login"]);
    } else {
      this.loggedUser = JSON.parse(localStorage.getItem('user'));
      if(this.loggedUser.role === 'customer'){
        this.router.navigate(['/home']);
      }
    }
    
  }

  ngOnInit() {}
}
