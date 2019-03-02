import { Component } from "@angular/core";

@Component({
  selector: "app-mega-input",
  template: `
    <fa-input icon="envelope" (value)="onNewValue($event)">
      <i class="fa fa-envelope"></i>
      <input placeholder="email" inputDir />
    </fa-input>
  `,
  styles: [
    `
      input {
        border: 1px solid gray;
        outline: none;
      }
    `
  ]
})
export class MegaInputComponent {
  onNewValue() {}
}
