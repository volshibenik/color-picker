import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsComponent } from "./forms/forms.component";
import { ReacFormComponent } from "./forms/reac-form/reac-form.component";
import { TempFormComponent } from "./forms/temp-form/temp-form.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [FormsComponent, ReacFormComponent, TempFormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [FormsComponent]
})
export class FormesModule {}
