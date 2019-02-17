import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PickerModule } from "./picker/picker.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PickerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
