import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: "[inputDir]"
})
export class InputDirDirective {
  focus = false;

  @HostListener("focus")
  ll() {
    this.focus = true;
    console.log("dd", this, this.focus);
  }

  @HostListener("blur")
  a() {
    this.focus = false;
    console.log("dd2", this, this.focus);
  }
}
