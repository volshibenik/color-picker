import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ComAComponent } from "./com-a/com-a.component";
import { ComBComponent } from "./com-b/com-b.component";
import { DomW2Component } from "./dom-w2.component";
import { ComZComponent } from "./com-z/com-z.component";
import { DirZDirective } from "./com-z/dir-z.directive";
import { DirTplDirective } from "./com-z/dir-tpl.directive";

@NgModule({
  declarations: [
    ComAComponent,
    ComBComponent,
    DomW2Component,
    ComZComponent,
    DirZDirective,
    DirTplDirective
  ],
  entryComponents: [ComAComponent, ComBComponent],
  imports: [CommonModule],
  exports: [DomW2Component, ComZComponent]
})
export class DomW2Module {}
