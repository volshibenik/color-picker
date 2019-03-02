import { Component, ContentChild, OnInit, HostBinding } from "@angular/core";
import { InputDirDirective } from "../input-dir.directive";

@Component({
  selector: "fa-input",
  template: `
    <ng-content select="i"></ng-content>
    <ng-content select="[inputDir]"></ng-content>
  `,
  styleUrls: ["./fa-input.component.scss"]
})
export class FaInputComponent implements OnInit {
  @ContentChild(InputDirDirective)
  input: InputDirDirective;

  ngOnInit() {
    console.log(this.input);
  }

  @HostBinding("class.focus")
  get focus() {
    console.log("ff");
    return this.input.focus;
  }
}
