import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { Topic, TopicWrapper } from '../_models/topic';

@Injectable({
  providedIn: 'root'
})
export class TopicService {
  baseUrl = environment.apiUrl;
  private currentTopicsSource = new BehaviorSubject<Topic[] | null>(null);
  public currentTopics$ = this.currentTopicsSource.asObservable();


  constructor(private http: HttpClient) { }


  

  loadTopics() {
    if(this.currentTopicsSource.value !== null) {
      return of();
    }
    return this.http.get<TopicWrapper>(`${this.baseUrl}categories`)
      .pipe(
        map((topicWrapper: TopicWrapper) => {
          if(topicWrapper.data.length > 0) {
            this.setCurrentTopic(topicWrapper.data);
          }

        })
      )
  }


  setCurrentTopic(topics: Topic[]) {
    this.currentTopicsSource.next(topics);
  }

  topicClicked(topic: Topic) {

    let currentState = this.currentTopicsSource.value;
    if(currentState) {

      let itemIndex = currentState.findIndex(x => x.id === topic.id);
      
      if (itemIndex !== -1) {
          // reverses in every click
          let updatedItem = { ...currentState[itemIndex] };
          
          // Swap background_color and text_color
          const { background_color, text_color, ...rest } = updatedItem;
          updatedItem = { ...rest, text_color: background_color, background_color: text_color };
  
          // Update the existing item in the array
          currentState[itemIndex] = updatedItem;
  
          // Update the state
          this.currentTopicsSource.next([...currentState]);
      } 
    }
    
  }


  resetClicked(ids: number[]) {
    let currentState = this.currentTopicsSource.value;
    console.log(currentState);

    currentState?.map(element => {
      if(ids.includes(element.id)) {
        const tempColor = element.background_color;
        element.background_color = element.text_color;
        element.text_color = tempColor;
        return element;
      }

      return element;
    })

    console.log(currentState);
    if(currentState) {
      this.currentTopicsSource.next([...currentState]);

    }

  }




}
