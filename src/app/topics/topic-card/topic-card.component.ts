import { Component, Input, OnInit } from '@angular/core';
import { Topic } from 'src/app/_models/topic';

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.css']
})
export class TopicCardComponent implements OnInit {
  @Input() topic: Topic | undefined;

  constructor() {}

  ngOnInit(): void {
  }

}
