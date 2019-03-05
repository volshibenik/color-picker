import { Component } from "@angular/core";

@Component({
  selector: "app-mega-input",
  template: `

    <fa-input icon="envelope" (input)="onNewValue($event)">
      <i class="fa fa-envelope"></i>
      <input placeholder="email" inputDir />
      <div *appKk>
      <input  placeholder="KKKK">
      </div>

    </fa-input>
  `,
  styles: [
    `
      :host {
        margin: 5px;
        display: block;
      }
      input {
        border: 1px solid gray;
        outline: none;
      }
    `
  ]
})
export class MegaInputComponent {
  onNewValue(e) {
    /*    console.log('kk', e); */
  }
}
