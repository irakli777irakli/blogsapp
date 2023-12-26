import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './heading/heading.component';
import { GenericBtnComponent } from './generic-btn/generic-btn.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubmitBtnComponent } from './submit-btn/submit-btn.component';
import { CustomDropdownComponent } from './custom-dropdown/custom-dropdown.component';
import { CustomDropdownBtnComponent } from './custom-dropdown-btn/custom-dropdown-btn.component';



@NgModule({
  declarations: [
  
    HeadingComponent,
    GenericBtnComponent,
    SubmitBtnComponent,
    CustomDropdownComponent,
    CustomDropdownBtnComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    HeadingComponent,
    GenericBtnComponent,
    SubmitBtnComponent,
    CustomDropdownComponent,
    CustomDropdownBtnComponent
  ]
})
export class SharedModule { }
