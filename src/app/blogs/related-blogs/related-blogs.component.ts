import { Component, Input } from '@angular/core';
import { Blog } from 'src/app/_models/blog';

@Component({
  selector: 'app-related-blogs',
  templateUrl: './related-blogs.component.html',
  styleUrls: ['./related-blogs.component.css']
})
export class RelatedBlogsComponent {
  @Input() relatedBlogs: Blog[] = [];


  

}
