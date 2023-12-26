import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { validateEmail } from '../_validators/email-validator';
import { atLeastTwoWordsValidator } from '../_validators/author-validator';
import { TopicService } from '../_services/topic.service';
import { map, take } from 'rxjs';
import { BtnActionTypesEnum } from '../_helpers/btnAction-helper';
import { validateLanguage } from '../_validators/language-validator';
import { noEmptySpace } from '../_validators/emptySpace-validator';
import { trimmedMinLength } from '../_validators/customMinLength-validator';
import { BlogService } from '../_services/blog.service';
import { fileRequired } from '../_validators/fileUploaded-validator';
import { ValidateDate } from '../_validators/checkDate-validator';
import { CustomDropdownService } from '../_services/custom-dropdown.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  uploadedfile: File | undefined;

  btnAddBlog = BtnActionTypesEnum.ADDBLOG;
  addBlogForm: FormGroup | undefined;

  blogImage = new FormControl(null, [
    fileRequired
  ])

  title = new FormControl('',[
    Validators.required,
    trimmedMinLength(2),
    noEmptySpace
  ]);

  blogDescription = new FormControl('', [
    Validators.required,
    trimmedMinLength(2),
    noEmptySpace
  ]);

  author = new FormControl('', [
    Validators.required,
    trimmedMinLength(4),
    validateLanguage,
    atLeastTwoWordsValidator,
    noEmptySpace
  ]);

  publicationDate = new FormControl(['',
    
  ]);

  categories = new FormControl('', [
    Validators.required
  ]);

  email = new FormControl('', [
    Validators.email,
    validateEmail,
  ])


  validateAuthor(control: FormControl) {
  }

  constructor(public topicService: TopicService, private blogService: BlogService,
      private customDrdService: CustomDropdownService) {  }


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


    // date validators are added only in this fashion, otherwise they are null. 
    this.addBlogForm.get('publicationDate')
      ?.addValidators([
        Validators.required,
    ValidateDate
      ])


    
  }


  


  addBlog() {
    if(this.addBlogForm?.invalid) {
      const formControls = Object.entries(this.addBlogForm.controls);
      console.log(formControls)
      for(const [key, value] of formControls) {
       
        value.markAsTouched();
        value.markAsDirty();
        value.updateValueAndValidity();
      }

      console.log(this.addBlogForm?.value);
      return;
    };


    let formdata = new FormData();
    formdata.set("title",this.addBlogForm?.get('title')?.value);
    formdata.set("description",this.addBlogForm?.get('blogDescription')?.value);
    if(this.uploadedfile) {
      formdata.set("image",this.uploadedfile);
    }
    formdata.set("author",this.addBlogForm?.get('author')?.value);
    formdata.set("publish_date",this.addBlogForm?.get('publicationDate')?.value);
    let idArr;
    this.getCategoryIds()
    .subscribe({
      next: categoryIds => {
        idArr = JSON.stringify(categoryIds);
      }
    })
    if(idArr){

      formdata.set("categories",idArr);
    }
    formdata.set("email",this.addBlogForm?.get('email')?.value);

    this.blogService.uploadBlog(formdata)
      .subscribe({
        next: (res) => console.log(res),
        error: err => console.log(err)
      })
  }


  onFileSelected(event: any) {
    this.uploadedfile = event.target.files[0];

    this.addBlogForm?.patchValue({
      blogImage: this.uploadedfile
    });

    this.addBlogForm?.get('blogImage')
      ?.updateValueAndValidity();
    
  }

  getCategoryIds() {
    return this.customDrdService.currentSelectedCategories$
      .pipe(
        take(1),
        map(categories => {
          const ids = categories.map(x => x.id.toString());
          return ids;
        })
      )
      
  }


  removeImg() {

    this.uploadedfile = undefined;
    

  }


 



}
