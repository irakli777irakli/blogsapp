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


}
