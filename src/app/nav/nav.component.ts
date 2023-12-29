import { Component, OnInit } from '@angular/core';
import { ModalService } from '../_services/modal.service';
import { AccountService } from '../_services/account.service';
import { BtnActionTypesEnum } from '../_helpers/btnAction-helper';
import { NavigationStart, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  btnType = BtnActionTypesEnum.OPENMODAL;

  constructor(public modalService: ModalService, public accountService: AccountService,private router: Router) {}


  ngOnInit(): void {
    this.router.events.pipe(
      filter(e => e instanceof NavigationStart)
    ).subscribe({
      next: e => {
        if(e instanceof NavigationStart) {
          if(e.url === '/add-blog') {
            this.modalService.mutateLogo(true);
          } else {
            this.modalService.mutateLogo(false);

          }
        }
      }
    })
  }


  openModal() {
    this.modalService.mutateModal();
  }
}
