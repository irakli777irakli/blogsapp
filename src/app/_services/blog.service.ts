import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Blog, BlogsData, SpecificBlog } from '../_models/blog';
import { BehaviorSubject, filter, map, of } from 'rxjs';
import { SwipeValue } from '../_models/swipeValue';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  baseUrl = environment.apiUrl;

  // main array of blogs
  private currentBlogsSource = new BehaviorSubject<Blog[] | null>(null);
  currentBlogs = this.currentBlogsSource.asObservable();

  // array of blogs which is filtered by some categories
  private currentFilteredBlogsSource = new BehaviorSubject<Blog[]>([]);
  currentFilteredBlogs$ = this.currentFilteredBlogsSource.asObservable();

  // single blog page's blog
  private currentMainBlogSource = new BehaviorSubject<SpecificBlog | null>(null);
  currentMainBlog$ = this.currentMainBlogSource.asObservable();

  // single blog pages' related blogs
  private currentRelatedBlogsSource = new BehaviorSubject<Blog[]>([]);
  currentRelatedBlogs$ = this.currentRelatedBlogsSource.asObservable();

  // this are what actually are displayed on single blogs related area
  private currentRelatedSclicedBlogsSource = new BehaviorSubject<Blog[]>([]);
  currentRelatedSlicedBlogs$ = this.currentRelatedSclicedBlogsSource.asObservable();

  // this corresponds of related blogs swiping
  private currentSwipeValueSource = new BehaviorSubject<SwipeValue | null>(null);
  currentSwipeValue$ = this.currentSwipeValueSource.asObservable();

  constructor(private http: HttpClient) { }


  // main blogs array
  getCurrentBlogSourceValue() {
    return this.currentBlogsSource.value;
  }
  // single blogs value
  getcurrentMainBlogSource() {
    return this.currentMainBlogSource.value;
  }
  // swipe indexes values
  getCurrentSwipeValue() {
    return this.currentSwipeValueSource.value;
  }
  // all related blogs are stored here
  getCurrentRelatedBlogsSource() {
    return this.currentRelatedBlogsSource.value;
  }

  // chunk of related blogs controlled by swipe values
  getCurrentRelatedSclicedBlogsSource() {
    return this.currentRelatedSclicedBlogsSource.value;
  }

  // loads all blog from api
  loadBlogs(blogUploaded = false) {
    if(this.currentBlogsSource.value !== null && !blogUploaded) {
      return of();
    }
    return this.http.get<BlogsData>(`${this.baseUrl}blogs`)
    .pipe(
      map((blogsData: BlogsData) => {
        if(blogsData.data.length > 0) {
          let currentDate = new Date();
          let blogs =blogsData.data.filter(x => new Date(x.publish_date) < currentDate);
          this.setCurrentBlog(blogs);
          }
        })
      )
  }

  //loads single blog for single blog page purposed, with email field added
  loadSingleBlog(id: number) {
    return this.http.get<SpecificBlog>(`${this.baseUrl}blogs/${id}`);
      
  }




  // helper method of setting main array of blogs
  setCurrentBlog(blogs: Blog[]) {
    this.currentBlogsSource.next(blogs)
  }

  // api call for sending forms, with full of blogs data.
  uploadBlog(formdata: any) {
    return this.http.post(`${this.baseUrl}blogs`,formdata)
  
  }

  // filter blogs by category
  filterBlogs(categoryIds: number[],resetFilter: boolean) {
    if(this.currentBlogsSource.value){
      let clonedState = [...this.currentBlogsSource.value];
      if(resetFilter) {
        clonedState = clonedState.filter(blog => blog.categories.some(x => !categoryIds.includes(x.id)))
          .sort((x,y) => y.id - x.id);

      }else {
        // sorting goes here
        clonedState = clonedState.filter(blog => blog.categories.some(x => categoryIds.includes(x.id)))
          .sort((x,y) => y.id - x.id);

      }
      if(clonedState.length > 0) {
        this.currentFilteredBlogsSource.next(clonedState);

      }
      else {
        this.currentFilteredBlogsSource.next([]);

      }

    }

    }



    setMainBlog(id: number) {
      let currentBlogState = this.getCurrentBlogSourceValue();

      if(currentBlogState === null) {
        this.loadBlogs()
          .subscribe({
            next: () => {
              this.getMainAndRelatedBlogs(id);
            }
          })
        return;

      }

      this.getMainAndRelatedBlogs(id);
    
          
    }

    getMainAndRelatedBlogs(mainBlogId: number) {
      this.loadSingleBlog(mainBlogId)
        .subscribe({
          next: blog => {
            if(blog) {
              this.currentMainBlogSource.next(blog);
              let relatedIds = blog?.categories.map(x => x.id);
              this.setRelatedBlogs(relatedIds);
                    
            }
          }
        })
      

      
    }

    setRelatedBlogs(relatedCategoryIds: number[]) {
      let mainState = this.getCurrentBlogSourceValue();
      let currentMBlog = this.getcurrentMainBlogSource();
      
      let relatedBlogs = mainState?.filter(blog => (blog.categories.some(x => relatedCategoryIds.includes(x.id) && (blog.id!== currentMBlog?.id))))
      .sort((x,y) => y.id - x.id)
      
      if(relatedBlogs) {
        if(relatedBlogs.length > 0) {
          this.currentRelatedBlogsSource.next(relatedBlogs);

          let swipeValue = this.getCurrentSwipeValue();
          if(swipeValue) {
            this.utilizeSwiper(swipeValue.start,swipeValue.end);
          } else {
            
            // starting values
            this.currentSwipeValueSource.next({
              start: 0,
              end: 3
            });
            swipeValue = this.getCurrentSwipeValue();
            if(swipeValue)
            this.utilizeSwiper(swipeValue.start,swipeValue.end);

          }

        }

      }

    }

    utilizeSwiper(start: number, end: number) {
      let currentRelatedBlogState = this.getCurrentRelatedBlogsSource();
      if(currentRelatedBlogState.length > 0) {
          this.currentRelatedSclicedBlogsSource.next(currentRelatedBlogState.slice(start,end));

      }

    }

    swipeRelatedBlogs(next: boolean = false) {
    
      let currentSwipeValue = this.getCurrentSwipeValue();
    
      if (next && currentSwipeValue && currentSwipeValue.end < this.getCurrentRelatedBlogsSource().length - 1) {
        this.currentSwipeValueSource.next({
          start: currentSwipeValue.start + 3,
          end: currentSwipeValue.end + 3
        });
    
        currentSwipeValue = this.getCurrentSwipeValue();
        this.utilizeSwiper(currentSwipeValue!.start, currentSwipeValue!.end);
      } else if (!next && currentSwipeValue && currentSwipeValue.start >= 3) {
        this.currentSwipeValueSource.next({
          start: currentSwipeValue.start - 3,
          end: currentSwipeValue.end - 3
        });
    
        currentSwipeValue = this.getCurrentSwipeValue();
        this.utilizeSwiper(currentSwipeValue!.start, currentSwipeValue!.end);
      }
    }

    

}