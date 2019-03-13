import { Component, OnInit, OnChanges, AfterViewChecked } from "@angular/core";

@Component({
  selector: "s-a",
  template: `
    <p>
      s-a works!
    </p>
  `
})
export class SAComponent implements AfterViewChecked {
  constructor() {}

  ngAfterViewChecked() {
    console.log("still here");
  }
}
