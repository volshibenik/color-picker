import { Directive, ElementRef, OnInit, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: "[fDir]"
})
export class FDirDirective implements OnInit {
  constructor(private el: ElementRef, private r: Renderer2) {}

  @Input() fDir;
  ngOnInit() {
    //  console.log(this.el, this.fDir);
    this.r.setAttribute(this.el.nativeElement, this.fDir, "");
  }
}
