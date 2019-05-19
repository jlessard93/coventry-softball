import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

import {AuthService} from './auth.service';
import {Observable} from 'rxjs';
import {map, take, tap} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {
  }


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    return this.auth.user
      .pipe(take(1))
      .pipe(map(user => !!user))
      .pipe(tap(loggedIn => {
        if (!loggedIn) {
          console.log('access denied');
          this.router.navigate(['/']);
        }
      }));

  }
}
