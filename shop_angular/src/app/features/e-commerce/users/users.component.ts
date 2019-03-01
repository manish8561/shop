import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import { DatatableComponent } from "@swimlane/ngx-datatable/release";

import { CommonService } from "@app/core/services";

import { config } from "@app/core/smartadmin.config";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html"
})
export class UsersComponent implements OnInit {
  orders: any;
  url = config.frontend_api_url + "order/get";
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('sampleT') public sampleT: TemplateRef<any>;

  constructor(
    private commonservice: CommonService,
    private router: Router,
    private _flashMessagesService: FlashMessagesService
  ) {}
  rows = [];
  temp = [];
  loadingIndicator: boolean = true;

  reorderable: boolean = true;

  pageSize: number = 10;

  controls: any = {
    pageSize: 10,
    filter: ""
  };

  columns = [ ];
  ngOnInit() {
    this.
    columns = [
      { prop: "name" },
      { prop: "email" },
      { prop: "role" },
      { prop: "ip" },
      { prop: "phone" }, 
      { prop: "status" },
      { prop: "balance" },
      { prop: "createdAt", name:"Added" },
      { prop: "updatedAt" },
      { prop: '_id', name:'Action', cellTemplate: this.sampleT}
    ];
    this.commonservice.get("user/get").subscribe(res => {
      this.temp = [...res.user];

      // push our inital complete list
      this.rows = res.user;

      this.loadingIndicator = false;
    });
  }
  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return (
        !val ||
        ["name", "email", "status","role"].some((field: any) => {
          return d[field].toLowerCase().indexOf(val) !== -1;
        })
      );
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  updatePageSize(value) {
    if (!this.controls.filter) {
      // update the rows
      this.rows = [...this.temp];
      // Whenever the filter changes, always go back to the first page
      this.table.offset = 0;
    }

    this.controls.pageSize = parseInt(value);

    this.table.limit = this.controls.pageSize;

    window.dispatchEvent(new Event("resize"));
  }
}
