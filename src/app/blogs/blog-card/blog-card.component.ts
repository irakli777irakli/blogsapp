import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/_models/blog';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {
  @Input() blog: Blog | undefined;
   
  constructor() {}

  ngOnInit(): void {
    this.compareTime();
  }
  
  compareTime() {
    if(this.blog?.publish_date) {
      let blogDate = new Date(this.blog?.publish_date);
      let currentDate = new Date();
      if(blogDate < currentDate) return true;

    }
    return false;
  }

}
