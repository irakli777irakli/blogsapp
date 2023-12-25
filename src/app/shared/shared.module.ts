import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './heading/heading.component';
import { GenericBtnComponent } from './generic-btn/generic-btn.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubmitBtnComponent } from './submit-btn/submit-btn.component';



@NgModule({
  declarations: [
  
    HeadingComponent,
    GenericBtnComponent,
    SubmitBtnComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    HeadingComponent,
    GenericBtnComponent,
    SubmitBtnComponent
  ]
})
export class SharedModule { }
