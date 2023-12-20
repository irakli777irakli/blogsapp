import { Component, OnInit } from '@angular/core';
import { TopicService } from 'src/app/_services/topic.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  constructor(public topicService: TopicService) {}
  
  
  
  ngOnInit(): void {
  }


}
