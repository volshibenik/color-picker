import { Directive, ElementRef, OnInit, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: "[dirZ]"
})
export class DirZDirective implements OnInit {
  constructor(private el: ElementRef, private r: Renderer2) {}
  @Input() dirZ;
  ngOnInit() {
    this.r.setAttribute(this.el.nativeElement, this.dirZ, "");
  }
}
