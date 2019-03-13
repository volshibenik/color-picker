import { Component, OnInit } from "@angular/core";

@Component({
  selector: "templ-cont",
  template: `
    <h2>container</h2>
    <templ-a>
      <div *templDir><p>Dir content</p></div>
    </templ-a>
  `,
  styles: []
})
export class TemplContComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
