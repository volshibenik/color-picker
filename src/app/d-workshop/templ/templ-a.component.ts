import {
  Component,
  OnInit,
  ContentChild,
  AfterContentInit
} from "@angular/core";
import { TemplDirDirective } from "./templ-dir.directive";

@Component({
  selector: "templ-a",
  template: `
    <h4>content from inside component tag with template dir applied:</h4>
    <ng-content *ngTemplateOutlet="aa.template"></ng-content>
  `,
  styles: []
})
export class TemplAComponent implements OnInit, AfterContentInit {
  constructor() {}
  @ContentChild(TemplDirDirective) aa: TemplDirDirective;

  ngOnInit() {}

  ngAfterContentInit() {
    console.log(this.aa, "aa");
  }
}
