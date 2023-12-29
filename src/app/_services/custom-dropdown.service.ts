import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, take } from 'rxjs';
import { Topic } from '../_models/topic';
import { TopicService } from './topic.service';

@Injectable({
  providedIn: 'root'
})
export class CustomDropdownService {
  
  
  private currentSelectedCategoriesSource = new BehaviorSubject<Topic[]>([]);
  currentSelectedCategories$ = this.currentSelectedCategoriesSource.asObservable();



  constructor(private topicService: TopicService) { 
   
  }

  resetSelectionList() {
    this.currentSelectedCategoriesSource.next([]);
  }

  getNumberOfItems() {
    return this.currentSelectedCategoriesSource.value.length;
  }

  addSelectedTopic(topic: Topic) {
    let currentState = this.currentSelectedCategoriesSource.value;
    const item = currentState.find(x => x.id === topic.id);
    if(item !== undefined) {
      currentState = currentState.filter(x => x.id !== topic.id)
      this.currentSelectedCategoriesSource.next([...currentState]);
      this.topicService.topicClicked(topic,true);

      return;

    }
    this.topicService.topicClicked(topic,true);
    this.currentSelectedCategoriesSource.next([...currentState,topic])
  }

}
