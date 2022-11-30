import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  headers: any = {
    'Authorization': `Bearer ${localStorage.getItem("jwt")}`,
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }

  constructor(private http: HttpClient) { }

  getDateCoupon() {
    return this.http.get("/php/getDateCoupon.php")
  }

  generateCouponMail(data:string){
    return this.http.post("/php/setDate.php",{ data },{headers:this.headers});
  }

  generateMailWithPdf(data:string,pdf:string){
    return this.http.post("/php/setDate.php",{ data,pdf},{headers:this.headers});
  }

}
