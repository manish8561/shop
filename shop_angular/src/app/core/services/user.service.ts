import { Injectable } from "@angular/core";

import { BehaviorSubject } from "rxjs";
import { JsonApiService } from "@app/core/services/json-api.service";

const defaultUser = {
  username: "Guest"
}
@Injectable()
export class UserService {
  public user$ = new BehaviorSubject({...defaultUser});
  public loggedUser:any;

  constructor(private jsonApiService: JsonApiService) {
    this.jsonApiService.fetch("/user/login-info.json").subscribe(this.user$);
    if(localStorage.getItem('logged') === 'yes'){
      this.loggedUser = JSON.parse(localStorage.getItem('user'));
    }
  }

  public logout(){
    this.loggedUser = {};
    localStorage.removeItem('logged');
    localStorage.removeItem('user');
    localStorage.removeItem('login_token');
  
    this.user$.next({...defaultUser});
  }

}
