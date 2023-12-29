import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../_services/blog.service';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute,public blogService: BlogService) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: param => {
        let blogId = param.get('id');
        if(blogId) {
          let parsedId = Number.parseInt(blogId);
          this.blogService.setMainBlog(parsedId);

          
        }
      }
    })
  }


  


}
