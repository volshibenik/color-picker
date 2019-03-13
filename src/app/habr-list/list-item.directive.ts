import { Directive, Optional, TemplateRef } from "@angular/core";
import { ListItemContext } from "./list-item-context";

@Directive({
  selector: "[list-item]"
})
export class ListItemDirective {
  constructor(
    @Optional() public readonly templateRef: TemplateRef<ListItemContext>
  ) {}
}
