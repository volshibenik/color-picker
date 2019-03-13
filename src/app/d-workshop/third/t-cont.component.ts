import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  Injector,
  ViewRef
} from "@angular/core";
import { TAComponent } from "./t-a.component";
import { TBComponent } from "./t-b.component";

@Component({
  selector: "t-cont",
  template: `
    <br />
    <button (click)="show('a')">show A</button>
    <button (click)="show('b')">show B</button>
    <ng-container #vc></ng-container>
  `
})
export class TContComponent implements OnInit {
  @ViewChild("vc", { read: ViewContainerRef }) vc: ViewContainerRef;
  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  compRefs = <any>{};
  view: ViewRef;

  ngOnInit() {
    const facA = this.resolver.resolveComponentFactory(TAComponent);
    const facB = this.resolver.resolveComponentFactory(TBComponent);
    this.compRefs.a = facA.create(this.injector);
    this.compRefs.b = facB.create(this.injector);
  }

  show(letter) {
    /*     const comp = letter === "a" ? TAComponent : TBComponent;
    const factory = this.resolver.resolveComponentFactory(comp);
    console.log(letter, comp, factory);
    this.vc.clear();
    this.vc.createComponent(factory); */
    this.vc.detach();
    this.view = this.compRefs[letter].hostView;
    this.vc.insert(this.view);
    console.log(this.view);
  }
}
