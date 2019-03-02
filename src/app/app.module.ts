import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PickerModule } from "./picker/picker.module";
import { MegaInputComponent } from "./mega-input/mega-input.component";
import { FaInputComponent } from "./mega-input/fa-input/fa-input.component";
import { InputDirDirective } from "./mega-input/input-dir.directive";

@NgModule({
  declarations: [
    AppComponent,
    MegaInputComponent,
    FaInputComponent,
    InputDirDirective
  ],
  imports: [BrowserModule, PickerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
