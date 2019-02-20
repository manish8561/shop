import { Component, OnInit,Renderer2, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: [
    './../home.component.css','./main.component.css'
  ],
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private renderer2: Renderer2, @Inject(DOCUMENT) private _document) { }
 
  ngOnInit() {   
    let s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = '//ws-in.amazon-adsystem.com/widgets/q?rt=tf_mfw&ServiceVersion=20070822&MarketPlace=IN&ID=V20070822%2FIN%2Fflightvana786-21%2F8001%2Fb7ab2543-cd0a-4b1a-aa73-e4edddc0115b';
    s.text = ``;
    s.async = false;
    //let child = this._document.getElementById('amazon_search');
    //child.style.display='none';
    //child.innerHTML = `   <script src="//z-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&Operation=GetScript&ID=OneJS&WS=1&Marketplace=IN"></script><script src="//z-in.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&amp;Operation=GetScript&amp;ID=OneJS&amp;WS=1&amp;Marketplace=IN"></script>`;
    //child.appendChild(s);   
    //this.renderer2.appendChild(this._document.body, s);
    let child = this._document.getElementById('featured_products');
    let child2 = this._document.getElementById('amazon_widget_IN_8001_0');
      //console.log('featured products',child2.innerHTML);
      child.innerHTML=child2.innerHTML;
      let that = this;
      setTimeout(()=>{   
            child2 = that._document.getElementById('amazon_widget_IN_8001_0');
          //console.log('featured products',child2.innerHTML);
          child.innerHTML=child2.innerHTML;
          
      }, 5000);
    }

  unlock(event) {
    event.preventDefault();
    this.router.navigate(['/dashboard'])
  }



}
