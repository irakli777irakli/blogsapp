import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { Observable, map, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  
  constructor(private accountService: AccountService,private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this.accountService.currentUser$
      .pipe(
        map(user => {
          if(user) return true;
          else {
            this.router.navigateByUrl('/');
            return false
          };
        })
      )

    
  }

}