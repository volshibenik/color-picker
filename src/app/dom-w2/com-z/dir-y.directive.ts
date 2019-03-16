import {
  Directive,
  ElementRef,
  OnInit,
  Input,
  Renderer2,
  HostBinding,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[dirY]"
})
export class DirYDirective implements OnInit {
  @HostBinding("style.color") st: string;
  @HostListener("click") changeC() {
    console.log("this", this, this.st);
  }
  constructor() {}
  ngOnInit() {
    console.log("dirY", this.st);
  }
}
