import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContainerComponent } from "./container.component";
import { ListItemDirective } from "./list-item.directive";
import { ListComponent } from "./list.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ListComponent, ContainerComponent, ListItemDirective],
  imports: [CommonModule, FormsModule],
  exports: [ContainerComponent]
})
export class HabrListModule {}
