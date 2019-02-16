import { Component,OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'fashion pay';
  constructor( @Inject(DOCUMENT) private _document){
    /* for hiding amazon search widget using angular with javascript */
    let child = this._document.getElementById('amzn_assoc_ad_div_adunit_0');
    child.style.display='none';
    child = this._document.getElementById('amazon_widget_IN_8001_0');
    child.style.display='none';
    
  }
}
