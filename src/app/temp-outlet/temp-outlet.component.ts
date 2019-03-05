import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-temp-outlet',
  template: `
    <ng-template #kk let-lessonsCounter="variable">
      <button class="tab-button" (click)="login()">{{loginText}}
      </button>
      <div>{{lessonsCounter || 0}}</div>
      <button class="tab-button" (click)="signUp()">{{signUpText}}
      </button>
    </ng-template>
-----------------------------<br>
  <ng-container *ngTemplateOutlet="kk; context: ctx0"></ng-container>
  <br>-----------------------------<br>

    <ng-container *ngIf="boo">
      <ng-container *ngTemplateOutlet="kk; context: ctx1"></ng-container>
    </ng-container>

    <p>divisor</p>

    <ng-container *ngIf="!boo">
      <ng-container *ngTemplateOutlet="kk; context: ctx2"></ng-container>
    </ng-container>
    <app-child [inp]="kkk"></app-child>
  `,
})
export class TempOutletComponent implements OnInit {
  loginText = 'Login';
  signUpText = "Sign U";
  lessons = ['le1', 'Lesson2'];
  boo = false; //change and template will move before/after divisor tAg
  ctx0 = { variable: 5555 };
  ctx1 = { variable: 5 };
  ctx2 = { variable: 10 };

  @ViewChild('kk')
  private kkk: TemplateRef<any>

  ngOnInit() {
    console.log(this.kkk);

  }

  logging() {
    console.log('login');

  }

  signUp() {
    console.log('Sign');

  }

}
