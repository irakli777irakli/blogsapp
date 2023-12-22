import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailValidator, validateEmail } from '../_validators/email-validator';
import { AuthorValidator, atLeastTwoWordsValidator } from '../_validators/author-validator';
import { TopicService } from '../_services/topic.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  addBlogForm: FormGroup | undefined;

  blogImage = new FormControl('', [
    Validators.required
  ])

  title = new FormControl('',[
    Validators.required,
    Validators.minLength(2)
  ]);

  blogDescription = new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ]);

  author = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.pattern(/^[\u10A0-\u10FF\s]+$/),
    atLeastTwoWordsValidator
  ]);

  publicationDate = new FormControl(['', Validators.required]);

  categories = new FormControl('', [
    Validators.required
  ]);

  email = new FormControl('', [
    Validators.email,
    validateEmail
  ])


  validateAuthor(control: FormControl) {
  }

  constructor(private topicService: TopicService) {  }


  ngOnInit(): void {
    this.addBlogForm = new FormGroup({
      blogImage: this.blogImage,
      title: this.title,
      blogDescription: this.blogDescription,
      author: this.author,
      publicationDate: this.publicationDate,
      categories: this.categories,
      email: this.email
    })

    this.loadCategoriesData();

  }


  loadCategoriesData() {
    this.topicService.currentTopics$
      .pipe(
        take(1)
      ).subscribe({
        next: data => {
          if(data) {
            this.addBlogForm?.get('categories')?.setValue(data);
          }
        }
      })
  }


  addBlog() {

  }



}
