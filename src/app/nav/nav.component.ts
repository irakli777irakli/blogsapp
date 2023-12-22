import { Component, OnInit } from '@angular/core';
import { ModalService } from '../_services/modal.service';
import { AccountService } from '../_services/account.service';
import { BtnActionTypesEnum } from '../_helpers/btnAction-helper';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  btnType = BtnActionTypesEnum.OPENMODAL;

  constructor(private modalService: ModalService, public accountService: AccountService) {}


  ngOnInit(): void {
    
  }


  openModal() {
    this.modalService.mutateModal();
  }
}
