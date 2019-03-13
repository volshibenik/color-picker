import { Directive, TemplateRef } from "@angular/core";

@Directive({
  selector: "[templDir]"
})
export class TemplDirDirective {
  constructor(public template: TemplateRef<HTMLElement>) {}
}
