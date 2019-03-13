import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FContComponent } from "./first/f-cont.component";
import { FDirDirective } from "./first/f-dir.directive";
import { SContComponent } from "./second/s-cont.component";
import { SAComponent } from "./second/s-a.component";
import { TContComponent } from "./third/t-cont.component";
import { TAComponent } from "./third/t-a.component";
import { TBComponent } from "./third/t-b.component";
import { TCont2Component } from "./third/t-cont2.component";
import { TemplContComponent } from "./templ/templ-cont.component";
import { TemplAComponent } from "./templ/templ-a.component";
import { TemplDirDirective } from "./templ/templ-dir.directive";

@NgModule({
  declarations: [
    FContComponent,
    FDirDirective,
    SContComponent,
    SAComponent,
    TContComponent,
    TAComponent,
    TBComponent,
    TCont2Component,
    TemplContComponent,
    TemplAComponent,
    TemplDirDirective
  ],
  entryComponents: [TAComponent, TBComponent],
  imports: [CommonModule],
  exports: [
    FContComponent,
    SContComponent,
    TContComponent,
    TCont2Component,
    TemplContComponent
  ]
})
export class DWorkshopModule {}
