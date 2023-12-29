import { Component, Input } from '@angular/core';
import { BlogService } from 'src/app/_services/blog.service';

@Component({
  selector: 'app-next-prev-btn',
  templateUrl: './next-prev-btn.component.html',
  styleUrls: ['./next-prev-btn.component.css']
})
export class NextPrevBtnComponent {
  @Input() nextBtn = false;
  @Input() prevBtn = false;



  constructor(private blogService: BlogService) {}


  nextBtnClicked() {
    this.blogService.swipeRelatedBlogs(true);
    
  }
  prevBtnClicked() {
    this.blogService.swipeRelatedBlogs();
  }
  



}
