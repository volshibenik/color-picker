import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
  ComponentFactoryResolver
} from "@angular/core";
import { ComAComponent } from "./com-a/com-a.component";
import { ComBComponent } from "./com-b/com-b.component";

@Component({
  selector: "app-dom-w2",
  template: `
    <div dirY>DOM-2W</div>
    <button (click)="show('a')">show A</button>
    <button (click)="show('b')">show B</button>
    <ng-container #c>as</ng-container>

    <app-com-z>
      <p>paraf</p>
    </app-com-z>
  `
})
export class DomW2Component implements AfterViewInit {
  constructor(private resolver: ComponentFactoryResolver) {}
  comp = null;
  @ViewChild("c", { read: ViewContainerRef }) vc: ViewContainerRef;
  ngAfterViewInit() {
    console.log(this.vc);
  }
  /*   createFactories(compsArr) {
    return compsArr.map(e => this.resolver.resolveComponentFactory(e));
  } */
  show(letter) {
    this.comp = letter === "a" ? ComAComponent : ComBComponent;
    const factory = this.resolver.resolveComponentFactory(this.comp);
    this.vc.clear();
    this.vc.createComponent(factory);
  }
}
