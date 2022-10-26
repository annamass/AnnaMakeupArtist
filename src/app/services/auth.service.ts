import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  getAuthToken(){

  }

  registraUtente(registrationForm:AbstractControl){
    return this.http.post("/php/registrati.php",registrationForm);
  }
  
  loginUtente(loginForm:AbstractControl){
    return this.http.post("/php/login.php",loginForm);
  }

  logoutUtente(){
    return this.http.post("/php/logout.php",{});
  }
  
}
