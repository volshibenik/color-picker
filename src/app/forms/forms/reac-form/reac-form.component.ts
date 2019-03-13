import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-reac-form",
  templateUrl: "./reac-form.component.html"
})
export class ReacFormComponent implements OnInit {
  name = new FormControl("");
  age = new FormControl("");
  constructor() {}

  ngOnInit() {
    this.name.valueChanges.subscribe(d => console.log(d));
  }
}
