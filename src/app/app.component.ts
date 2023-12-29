import { Component, OnInit } from '@angular/core';
import { TopicService } from './_services/topic.service';
import { BlogService } from './_services/blog.service';
import { ModalService } from './_services/modal.service';
import { AccountService } from './_services/account.service';
import { SuccessModalStateService } from './_services/success-modal-state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'blogsApp';

  constructor(
    private topicService: TopicService,private blogService: BlogService,
    public modalService: ModalService, private accountService: AccountService,
    public successMdService: SuccessModalStateService) {}

  ngOnInit(): void {
    this.loadTopics();
    this.loadBlogs();
    this.loadAuth();
      

  }

  loadTopics() {
    this.topicService.loadTopics()
    .subscribe({
      next: () => {
             
      }
    })
  }

  loadBlogs() {
    this.blogService.loadBlogs()
    .subscribe({
      next: () => {
      }
    })
  }

  loadAuth() {
    let auth = localStorage.getItem('auth');
    if(auth !== null) {
      let isLoggedIn = JSON.parse(auth);
      if(isLoggedIn) {
        this.accountService.setCurrentUser(isLoggedIn);
      }
    }
  }


}
