import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-com-z",
  template: `
    <div [dirZ]="att">green text</div>
    <ng-template #t><p>blabla</p></ng-template>

    <com-a><p>aaa</p></com-a>
    <div *dirTpl><p>papapapapapapap</p></div>
  `,
  styles: [
    `
      [highlight] {
        color: yellowgreen;
      }
    `
  ]
})
export class ComZComponent implements OnInit {
  att = "highlight";
  constructor() {}

  ngOnInit() {}
}
