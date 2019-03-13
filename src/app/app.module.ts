import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PickerModule } from "./picker/picker.module";
import { MegaInputComponent } from "./mega-input/mega-input.component";
import { FaInputComponent } from "./mega-input/fa-input/fa-input.component";
import { InputDirDirective } from "./mega-input/input-dir.directive";
import { TempOutletComponent } from "./temp-outlet/temp-outlet.component";
import { ChildComponent } from "./temp-outlet/child.component";
import { KkDirective } from "./mega-input/kk.directive";
import { DomW2Module } from "./dom-w2/dom-w2.module";
import { FormesModule } from "./forms/forms.module";
import { FormsModule } from "@angular/forms";
import { DWorkshopModule } from "./d-workshop/d-workshop.module";

@NgModule({
  declarations: [
    AppComponent,
    MegaInputComponent,
    FaInputComponent,
    InputDirDirective,
    TempOutletComponent,
    ChildComponent,
    KkDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PickerModule,
    DomW2Module,
    DWorkshopModule,
    FormesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
