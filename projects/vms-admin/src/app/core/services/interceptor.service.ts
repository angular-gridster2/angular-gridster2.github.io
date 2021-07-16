// Angular
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const token = localStorage.getItem('tokenABC');
    // if (token && token != null) {
    //     request = request.clone({
    //         headers: request.headers.set('Authorization', token)
    //     });
    // }
    console.log('Interceptor');
    return next.handle(request);
  }
}
