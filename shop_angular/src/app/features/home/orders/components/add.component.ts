import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {
  constructor() {}
  save(){
    console.log('saving the order');
  }
}
