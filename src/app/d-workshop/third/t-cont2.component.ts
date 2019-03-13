import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";

@Component({
  selector: "t-cont2",
  template: `
    <br />
    <br />
    <button (click)="show('1')">show A</button>
    <button (click)="show('2')">show B</button>
    <ng-template #t1><span>span1</span></ng-template>
    <ng-template #t2><span>span2</span></ng-template>
    <ng-container #vc></ng-container>
  `
})
export class TCont2Component implements OnInit {
  @ViewChild("t1", { read: TemplateRef }) t1: TemplateRef<any>;
  @ViewChild("t2", { read: TemplateRef }) t2: TemplateRef<any>;
  @ViewChild("vc", { read: ViewContainerRef }) vc: ViewContainerRef;
  constructor() {}
  v1;
  v2;

  ngOnInit() {
    this.v1 = this.t1.createEmbeddedView(null);
    this.v2 = this.t2.createEmbeddedView(null);
    console.log("tt", this.t1, this.v1);
  }
  show(num) {
    this.vc.detach();
    if (num === "1") {
      this.vc.insert(this.v1);
    } else {
      this.vc.insert(this.v2);
    }
  }
}
