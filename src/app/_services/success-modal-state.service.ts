import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuccessModalStateService {
  private currentSuccessModalStateSource = new BehaviorSubject<boolean>(false);
  currentSuccessModalState$ = this.currentSuccessModalStateSource.asObservable();

  constructor() { }


  mutatiSuccessModal() {
    this.currentSuccessModalStateSource.next(!this.currentSuccessModalStateSource.value);
  }


}
