import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fsidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  showmenus = false;
  constructor() {
    if(localStorage.getItem('logged') === 'yes'){
      this.showmenus = true;
    }
  }
}
