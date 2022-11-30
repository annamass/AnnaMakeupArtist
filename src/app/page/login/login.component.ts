import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  Accedi(formData: { email: string, password: string }) {
    this.authService.loginUtente(formData).subscribe({
      next: (res: any) => {
        if (localStorage.getItem("isFirstAccess")) {
          localStorage.setItem("isFirstAccess", "false");
        } else {
          localStorage.setItem("isFirstAccess", "true");
        }
        localStorage.setItem("jwt", res.jwt);
        localStorage.setItem("expJwt", res.expJwt);
        this.goToCalendar();
      },
      error: (err: any) => {

      }
    })
  }

  goToCalendar() {
    let isFirstAccess = localStorage.getItem("isFirstAccess");
    if (isFirstAccess === "true") {
      this.router.navigate(["/welcome-user"]);
    } else {
      this.router.navigate(["/advent-calendar"]);
    }
  }

}
