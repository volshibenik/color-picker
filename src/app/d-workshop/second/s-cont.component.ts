import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  AfterViewInit,
  AfterViewChecked,
  ElementRef,
  Renderer2,
  ViewChild,
  ViewContainerRef,
  TemplateRef
} from "@angular/core";

@Component({
  selector: "s-cont",
  template: `
    <br />
    <button (click)="remove()">remove ch</button>
    <ng-template #t><s-a #chil></s-a></ng-template>
    <ng-container #vc></ng-container>
  `,
  styles: []
})
export class SContComponent implements AfterViewInit, AfterViewChecked {
  @ViewChildren("chil", { read: ElementRef }) childs: QueryList<ElementRef>;
  @ViewChild("vc", { read: ViewContainerRef }) vc: ViewContainerRef;
  @ViewChild("t", { read: TemplateRef }) tpl: TemplateRef<ElementRef>;

  constructor(private hoster: ElementRef, private rer: Renderer2) {}

  ngAfterViewChecked() {
    console.log(this.childs.length, "len");
  }
  ngAfterViewInit() {
    this.vc.createEmbeddedView(this.tpl);
    console.log(this.childs);
    console.log("vc", this.vc);
  }
  remove() {
    this.vc.remove();
    /*     this.rer.removeChild(
      this.hoster.nativeElement,
      this.childs.first.nativeElement
    ); */
  }
}
