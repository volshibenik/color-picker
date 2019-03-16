import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HostBComponent } from "./host-b.component";
import { HostBDirective } from "./host-b.directive";

@NgModule({
  declarations: [HostBComponent, HostBDirective],
  imports: [CommonModule],
  exports: [HostBComponent]
})
export class HostBModule {}
