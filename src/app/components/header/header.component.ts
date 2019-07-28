import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  navLogo: string;

  constructor() {
    this.navLogo = "/assets/img/logo.png";
  }

  ngOnInit() {}
}
