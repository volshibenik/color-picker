import {
  Directive,
  ElementRef,
  OnInit,
  Input,
  Renderer2,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[dirZ]"
})
export class DirZDirective implements OnInit {
  @HostBinding("style.color") st;
  constructor(private el: ElementRef, private r: Renderer2) {}
  @Input() dirZ;
  ngOnInit() {
    this.r.setAttribute(this.el.nativeElement, this.dirZ, "");
    console.log("dirZ", this.st);
  }
}
