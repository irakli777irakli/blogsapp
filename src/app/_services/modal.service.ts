import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private currentModalStateSource = new BehaviorSubject<boolean>(false);
  public currentModalState$ = this.currentModalStateSource.asObservable();



  constructor() { }


  mutateModal() {
    this.currentModalStateSource.next(!this.currentModalStateSource.value);
  }



}
