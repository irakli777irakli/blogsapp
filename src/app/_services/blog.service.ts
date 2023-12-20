import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Blog, BlogsData } from '../_models/blog';
import { BehaviorSubject, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  baseUrl = environment.apiUrl;
  private currentBlogsSource = new BehaviorSubject<Blog[] | null>(null);
  currentBlogs = this.currentBlogsSource.asObservable();

  constructor(private http: HttpClient) { }


  loadBlogs() {
    if(this.currentBlogsSource.value !== null) {
      return of();
    }
    return this.http.get<BlogsData>(`${this.baseUrl}blogs`)
      .pipe(
        map((blogsData: BlogsData) => {
          if(blogsData.data.length > 0) {
            this.setCurrentBlog(blogsData.data);
          }
        })
      )
  }


  setCurrentBlog(blogs: Blog[]) {
    this.currentBlogsSource.next(blogs);
  }





}
