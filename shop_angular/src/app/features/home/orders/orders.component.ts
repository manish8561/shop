import { Component, OnInit, TemplateRef } from '@angular/core';
import {Router} from "@angular/router";


import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styles: [ './../home.component.css']
})
export class OrdersComponent implements OnInit {
 

  bsModalRef: BsModalRef;
  public termsAgreed = false

  constructor(
    private router: Router,  
    private modalService: BsModalService) {
      if (localStorage.getItem('logged') !== 'yes') {
        // console.log('hit by login');
        this.router.navigate(['/home/login'])
      } 
    }
 
   ngOnInit() {}

  register(event){
    event.preventDefault();
    this.router.navigate(['/orders'])
  }

  openModal(event, template: TemplateRef<any>) {
    event.preventDefault();
    this.bsModalRef = this.modalService.show(template);
  }

  onTermsAgree(){
    this.termsAgreed = true
    this.bsModalRef.hide()
  }

  onTermsClose(){
    this.bsModalRef.hide()
  }


}
