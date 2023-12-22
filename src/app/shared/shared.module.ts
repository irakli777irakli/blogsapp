import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './heading/heading.component';
import { GenericBtnComponent } from './generic-btn/generic-btn.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  
    HeadingComponent,
    GenericBtnComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    HeadingComponent,
    GenericBtnComponent
  ]
})
export class SharedModule { }
