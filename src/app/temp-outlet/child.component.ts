import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <div>-------------child zone--------------------</div>
  <ng-template #def>default template</ng-template>
    <ng-container *ngTemplateOutlet="inp || def;context:ct"></ng-container>
  `,

})
export class ChildComponent implements OnInit {

  @Input() inp: TemplateRef<any>;
  ct = { variable: 'I am child' }


  ngOnInit() {
    console.log('kkkkkkkk', this.inp);
  }

}
