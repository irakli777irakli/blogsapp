import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new BehaviorSubject<boolean>(false);
  currentUser$ = this.currentUserSource.asObservable();


  constructor(private http: HttpClient,private modalService: ModalService) { }



  login(email: string) {
    return this.http.post(`${this.baseUrl}login`,{email})
      
      

  }


  setCurrentUser(loggedIn: boolean) {
    this.currentUserSource.next(loggedIn);
  }
}
