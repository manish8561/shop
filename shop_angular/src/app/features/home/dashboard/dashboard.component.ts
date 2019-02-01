import { Component, OnInit, TemplateRef } from '@angular/core';
import {Router} from "@angular/router";


import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [ './../home.component.css']
})
export class DashboardComponent implements OnInit {
 

  bsModalRef: BsModalRef;
  public termsAgreed = false

  constructor(
    private router: Router,  
    private modalService: BsModalService) {}
 
   ngOnInit() {}

  register(event){
    event.preventDefault();
    this.router.navigate(['/dashboard'])
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
