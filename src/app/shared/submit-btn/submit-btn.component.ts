import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-submit-btn',
  templateUrl: './submit-btn.component.html',
  styleUrls: ['./submit-btn.component.css']
})
export class SubmitBtnComponent {

  @Input() btnText = '';
  @Input() btnStyle = '';
  @Input() showBtn: boolean | null = false;
  @Input() isFormDisabled: boolean = false;

}
