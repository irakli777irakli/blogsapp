import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormValidationTypes } from '../_helpers/formValidationNames-helper';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() minimumLength: number = 2;
  @Input() control: FormControl = new FormControl();
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() inputStyle = '';


  @Input() requiredValidator = false;
  @Input() noSpaceValidator = false;
  @Input() georgianLanguageValidator = false;
  @Input() atLeastTwoWordsValidator = false;
  @Input() trimmed2validator = false;
  @Input() trimmed4validator = false;
  @Input() emailValidator = false;
  @Input() customEmailValidator = false;

  
  

  constructor() {}


  ngOnInit(): void {

  }

}
