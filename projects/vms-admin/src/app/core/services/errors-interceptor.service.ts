// Angular
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ErrorsInterceptorService implements HttpInterceptor {

  constructor() { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .pipe(
        tap(ev => {
          if (ev instanceof HttpResponse) {
            // do stuff with response if you want
          }
        }, error => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 401) {
              console.log('401');
            }
            if (error.status === 403) {
              console.log('403');
            }
          }
        })
      );
  }
}
