import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit
} from "@angular/core";

@Component({
  selector: "f-cont",
  template: `
    <span #el [fDir]="attr">green text</span>
  `,
  styles: [
    `
      [highlight] {
        color: red;
      }
    `
  ]
})
export class FContComponent implements AfterViewInit {
  attr = "highlight";
  @ViewChild("el") span: ElementRef;
  ngAfterViewInit() {}
}
