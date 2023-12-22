import { Component, OnInit } from '@angular/core';
import { TopicService } from './_services/topic.service';
import { BlogService } from './_services/blog.service';
import { ModalService } from './_services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'blogsApp';

  constructor(
    private topicService: TopicService,private blogService: BlogService,
    public modalService: ModalService) {}

  ngOnInit(): void {
    this.loadTopics();
    this.loadBlogs();
      

  }

  loadTopics() {
    this.topicService.loadTopics()
    .subscribe({
      next: () => {
                  
      }
    })
  }

  loadBlogs() {
    this.blogService.loadBlogs()
    .subscribe({
      next: () => {
      }
    })
  }


}
