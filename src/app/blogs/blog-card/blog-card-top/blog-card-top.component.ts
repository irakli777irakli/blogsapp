import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card-top',
  templateUrl: './blog-card-top.component.html',
  styleUrls: ['./blog-card-top.component.css']
})
export class BlogCardTopComponent {
  @Input() imageSource = '';
  @Input() author = '';
  @Input() publish_date = '';
  @Input() blogAuthorEmail = '';
  @Input() componentStyles = '';
}
