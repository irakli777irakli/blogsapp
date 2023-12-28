import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Topic } from 'src/app/_models/topic';

@Component({
  selector: 'app-custom-dropdown-btn',
  templateUrl: './custom-dropdown-btn.component.html',
  styleUrls: ['./custom-dropdown-btn.component.css']
})
export class CustomDropdownBtnComponent {
  @Input() inDifferentSizes = false;
  @Input() Category: Topic | undefined;
  @Input() background_color = '';
  @Input() text_color = '';
  @Output() selectCategoryEmitter = new EventEmitter<Topic>();
  @Input() CustomBtnStyles = '';


  selectCategory() {
    if(this.Category) {
      this.selectCategoryEmitter.emit(this.Category);

    }
  }
  
}
