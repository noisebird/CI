import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataResolve implements Resolve<any> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    route.data = { ...route.data, isShow: false };
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({ name: '赵七', age: 12 }), 1000);
    });
  }

}
