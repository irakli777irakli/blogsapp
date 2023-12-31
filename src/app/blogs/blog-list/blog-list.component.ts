import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/_services/blog.service';
import { TopicService } from 'src/app/_services/topic.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  constructor(public blogService: BlogService,public topicSerivce: TopicService) {}

  ngOnInit(): void {
  }

}
