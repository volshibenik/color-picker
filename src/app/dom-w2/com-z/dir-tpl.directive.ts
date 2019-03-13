import { Directive, TemplateRef } from "@angular/core";

@Directive({
  selector: "[dirTpl]"
})
export class DirTplDirective {
  constructor(private template: TemplateRef<any>) {}
}
