import { PreloadingStrategy, Route } from "@angular/router";
import { Observable, of, timer } from "rxjs";
import {flatMap} from "rxjs/operators";

export class CustomPreloading implements PreloadingStrategy {


  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      var delay: number = route.data['delay'];
      return timer(delay).pipe(flatMap(_ => fn()));
    }
    return of(null);
  }

}