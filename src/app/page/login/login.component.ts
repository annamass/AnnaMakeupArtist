import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  Accedi(formData:{email:string,password:string}){
    this.authService.loginUtente(formData).subscribe({
      next : (res:any) => {
        localStorage.setItem("jwt",res.jwt);
        localStorage.setItem("expJwt",res.expJwt);
      },
      error : (err:any) => {
        
      }
    })
  }

}
