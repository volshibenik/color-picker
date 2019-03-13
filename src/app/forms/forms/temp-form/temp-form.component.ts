import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-temp-form",
  templateUrl: "./temp-form.component.html"
})
export class TempFormComponent implements OnInit {
  user = {
    name: "",
    age: null
  };
  constructor() {}

  ngOnInit() {
    console.log(this.user, "ll");
  }
}
