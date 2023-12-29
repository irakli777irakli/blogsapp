import { Component, OnInit } from '@angular/core';
import { Observable, take } from 'rxjs';
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

    // applies filter
    if(category.background_color === '#FFFFFF'){
      this.topicService.removeCurrentFilterBtn(category);
      this.applyOrRemoveFilter(true);
      
    }else {
      // removes filter
      this.topicService.setCurrentFilterBtns(category);
      this.applyOrRemoveFilter();
    }
    
  }
  // false means apply
  applyOrRemoveFilter(apply = false) {
    this.topicService.currentFIlterBtns$
        .pipe(
          take(1)
        ).subscribe({
          next: (filterbtns) => {
            let categoryIdsSet = new Set(filterbtns.map(fbtn => fbtn.id));
            let categoryIds: number[] = [...categoryIdsSet];
            this.blogService.filterBlogs(categoryIds,apply);
            
          }
        })
  }


}
