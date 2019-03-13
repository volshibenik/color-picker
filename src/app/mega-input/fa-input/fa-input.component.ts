import {
  Component,
  ContentChild,
  OnInit,
  HostBinding,
  ElementRef
} from "@angular/core";
import { InputDirDirective } from "../input-dir.directive";
import { KkDirective } from "../kk.directive";

@Component({
  selector: "fa-input",
  template: `
    <ng-content select="i"></ng-content>
    <ng-content select="[inputDir]"></ng-content>
    <ng-content *ngTemplateOutlet="kiss.template"></ng-content>
  `,
  styleUrls: ["./fa-input.component.scss"]
})
export class FaInputComponent implements OnInit {
  constructor(private hostElement: ElementRef) {
    console.log("display native host elem", this.hostElement.nativeElement);
  }
  @ContentChild(KkDirective) kiss: KkDirective;

  @ContentChild(InputDirDirective)
  input: InputDirDirective;

  ngOnInit() {
    console.log("uuu", this.input, this.kiss);
  }

  @HostBinding("class.focus")
  get focus() {
    return this.input.focus;
  }
}
