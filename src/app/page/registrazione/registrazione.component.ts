import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  registraUtente(registrationForm: any) {
    console.log(registrationForm);
    this.authService.registraUtente(registrationForm).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: any) => {
        alert(err);
      }
    })
  }

}
