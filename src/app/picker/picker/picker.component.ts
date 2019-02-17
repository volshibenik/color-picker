import { Component } from "@angular/core";

@Component({
  selector: "app-color-picker",
  templateUrl: "./picker.component.html"
})
export class PickerComponent {
  hue: string;
  color: string;

  getHue(color: string) {
    this.hue = color;
  }

  getColi(color: string) {
    this.color = color;
  }
}
