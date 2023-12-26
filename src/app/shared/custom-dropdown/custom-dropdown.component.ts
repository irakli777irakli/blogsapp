import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, take } from 'rxjs';
import { Topic } from 'src/app/_models/topic';
import { CustomDropdownService } from 'src/app/_services/custom-dropdown.service';
import { TopicService } from 'src/app/_services/topic.service';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.css']
})
export class CustomDropdownComponent   {
  @Input() control: FormControl = new FormControl();
  
  show = false;


  constructor(public customDropDownService: CustomDropdownService, public topicService: TopicService) {}
  
  
  

  showCategories() {
    this.show = !this.show;
  }


  addCategory(category: Topic) {
    this.customDropDownService.addSelectedTopic(category);
    if(this.customDropDownService.getNumberOfItems() > 0) {
      this.control.patchValue(1);
      this.control.updateValueAndValidity();
      
    }else {

      this.control.patchValue(0);
      this.control.updateValueAndValidity();

    }
  }





}
