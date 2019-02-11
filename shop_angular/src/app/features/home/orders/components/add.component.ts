import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {
  error = false;
  error_msg = `Please enter both fields!`;
  constructor(private router: Router) { }
  save(amazon_order_id, phone) {
    this.error = false;
    if (amazon_order_id.trim() !== '' && phone.trim() !== '') {
      console.log(amazon_order_id, phone);
      console.log('saving the order');
      this.router.navigate(['/home/order']);
    } else {
      this.error = true;
    }

  }
}
