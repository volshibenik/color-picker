import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[hostBLog]"
})
export class HostBDirective {
  constructor(private elementRef: ElementRef) {}

  @HostBinding("attr.log") isLog = true;

  @HostListener("input") onMyInput() {
    if (this.isLog) {
      console.log(this.elementRef.nativeElement.value);
    } else {
      console.log("noval");
    }
    console.log(this, this.elementRef);
  }

  @HostListener("click") onMyClick() {
    this.isLog = !this.isLog;
  }
  /* 
    @HostListener("focus") f() {
    this.isLog = true;
  }
  @HostListener("blur") b() {
    this.isLog = false;
  } */
}
