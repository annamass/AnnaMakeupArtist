import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent implements OnInit {

  userRegistrationOk: boolean;
  userRegistrationName: string = "";

  constructor(private authService: AuthService, private router: Router) { 
    this.userRegistrationOk = false;
  }

  ngOnInit(): void {}

  registraUtente(registrationForm: any) {
    this.authService.registraUtente(registrationForm).subscribe({
      next: (res: any) => {
        this.userRegistrationName = registrationForm.nome;
        this.userRegistrationOk = true;
        setTimeout(() => {
          this.router.navigate(["/login"]);
        }, 5000);

      },
      error: (err: any) => {
        alert(err);
      }
    })
  }

}
