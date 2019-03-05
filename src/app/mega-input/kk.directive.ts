import { Directive, TemplateRef, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appKk]'
})
export class KkDirective {

  constructor(public template: TemplateRef<HTMLElement>) { }

}

/*   constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }
  @Input('appKk')
  set someVariable(rr: ViewContainerRef) {
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }
}
 */
