import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
  
export class Interceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.addAuthToken(request));
  }

  addAuthToken(request: HttpRequest<any>) {

    const token = this.authService.getAuthToken();

    return request.clone({
        setHeaders: {
          'Authorization': `Basic ${token}`,
          'content-type': 'application/json',
          'Access-Control-Allow-Origin':'*'
        }
    })
  }

}