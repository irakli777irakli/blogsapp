import { Component } from '@angular/core';
import { SuccessModalStateService } from '../_services/success-modal-state.service';
import { Router } from '@angular/router';
import { BtnActionTypesEnum } from '../_helpers/btnAction-helper';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.css']
})
export class SuccessModalComponent {
  closeModalAfterSuccess = BtnActionTypesEnum.CLOSEMODALAFTERSUCCESS;

  constructor(private successMdService: SuccessModalStateService,
      private router: Router) {}


    closeModalAndNavigate(){
      this.successMdService.mutatiSuccessModal();
      this.router.navigateByUrl('/');
  }


 

}
