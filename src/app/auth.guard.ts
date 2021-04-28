import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatchService } from './service/match.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    public matchService: MatchService
    , private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.matchService.get().player_one.length > 2 && this.matchService.get().player_two.length > 2){
      return true;
    } else {
      this.router.navigateByUrl('/');
    }
    return this.matchService.get().player_one.length > 2 && this.matchService.get().player_two.length > 2;
    // return true;
  }

}
