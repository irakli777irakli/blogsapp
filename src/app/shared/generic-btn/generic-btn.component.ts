import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BtnActionTypesEnum } from 'src/app/_helpers/btnAction-helper';


@Component({
  selector: 'app-generic-btn',
  templateUrl: './generic-btn.component.html',
  styleUrls: ['./generic-btn.component.css']
})
export class GenericBtnComponent implements OnInit {
  @Output() openModal = new EventEmitter();
  @Output() closeModalAfterLogin = new EventEmitter();
  @Output() submitLoginForm = new EventEmitter();
  @Output() submitAddBlogForm = new EventEmitter();

  @Input() btnText = '';
  @Input() btnStyle = '';
  @Input() btnLink = '';
  @Input() showBtn: boolean | null = false;


  //BtnActionTypesEnum
  @Input() btnTypes: BtnActionTypesEnum | undefined;

  @Input() whichFormToSubmit = '';
  @Input() typeOfBnt = '';
  @Input() isFormDisabled: boolean = false;
  
  ngOnInit(): void {

  }

  performAction() {
    if(this.btnTypes === BtnActionTypesEnum.OPENMODAL){
      this.openModal.emit();
    }
    else if(this.btnTypes === BtnActionTypesEnum.ADDBLOG) {
      this.submitAddBlogForm.emit();
    }
    else if(this.btnTypes === BtnActionTypesEnum.CLOSEMODALAFTERLOGIN) {
      this.closeModalAfterLogin.emit();
    }else if(this.btnTypes === BtnActionTypesEnum.CLOSEMODALAFTERSUCCESS) {
      this.closeModalAfterLogin.emit();
    }
  }

}
