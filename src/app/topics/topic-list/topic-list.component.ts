import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/_models/blog';
import { Topic } from 'src/app/_models/topic';
import { BlogService } from 'src/app/_services/blog.service';
import { TopicService } from 'src/app/_services/topic.service';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {
  constructor(public topicService: TopicService,public blogService: BlogService) {}
  
  
  
  ngOnInit(): void {
  }

  categorySelected(category: Topic) {
    this.topicService.topicClicked(category);
    if(category.background_color === '#FFFFFF'){
      this.blogService.filterBlogs(category.id,false);

    }else {
      this.blogService.filterBlogs(category.id,true);

    }
    
  }


}
