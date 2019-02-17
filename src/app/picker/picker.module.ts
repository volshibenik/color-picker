import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PickerComponent } from "./picker/picker.component";
import { SliderComponent } from "./picker/slider/slider.component";
import { PaletteComponent } from "./picker/palette/palette.component";

@NgModule({
  declarations: [PickerComponent, SliderComponent, PaletteComponent],
  imports: [CommonModule],
  exports: [PickerComponent]
})
export class PickerModule {}
