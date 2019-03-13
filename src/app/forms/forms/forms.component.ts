import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-forms",
  template: `
    <app-reac-form></app-reac-form>
    <app-temp-form></app-temp-form>
  `
})
export class FormsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
