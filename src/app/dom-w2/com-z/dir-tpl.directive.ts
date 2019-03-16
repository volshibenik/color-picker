import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[dirTpl]"
})
export class DirTplDirective {
  constructor(
    private template: TemplateRef<any>,
    private vc: ViewContainerRef
  ) {
    this.vc.createEmbeddedView(this.template);
    this.vc.createEmbeddedView(this.template);
    console.log(this.vc, "wwwwwww");
  }
}
