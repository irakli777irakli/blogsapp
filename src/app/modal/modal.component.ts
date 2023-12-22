import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from '../_services/modal.service';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  
  email = new FormControl('',[
    Validators.required,
    Validators.email,
    Validators.pattern(/^[a-zA-Z0-9._%+-]+@redberry\.ge$/)])

  loginForm = new FormGroup({
    email: this.email
  });

  displayOKMsg = false;

  constructor(private modalService: ModalService,private accountService:AccountService) {}


  ngOnInit(): void {
    
  }


  login() {

    let email = this.loginForm.value.email;

    // Use optional chaining and nullish coalescing to ensure a valid string value
    let validEmail = email?.trim() ?? '';
  
    this.accountService.login(validEmail)
      .subscribe({
        next: () => {
          this.displayOKMsg = true;
        }
      })
      
  }

  closeModalAfterLogin() {
    this.accountService.setCurrentUser(true)
    this.modalService.mutateModal();
  }


  closeModal() {
    if(this.displayOKMsg) {
      this.closeModalAfterLogin();
    } else {
      this.modalService.mutateModal();

    }

  }

}