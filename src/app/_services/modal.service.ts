import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private currentModalStateSource = new BehaviorSubject<boolean>(false);
  public currentModalState$ = this.currentModalStateSource.asObservable();


  private currentRedberryLogoSource = new BehaviorSubject<boolean>(false);
  public currentRedberryLogo$ = this.currentRedberryLogoSource.asObservable();

  constructor() { }


  mutateModal() {
    this.currentModalStateSource.next(!this.currentModalStateSource.value);
  }

  mutateLogo(performAction: boolean) {
    this.currentRedberryLogoSource.next(performAction);

  }



}
