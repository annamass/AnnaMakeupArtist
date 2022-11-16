import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent implements OnInit {

  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
  
  }

  registraUtente(registrationForm: any) {
    this.authService.registraUtente(registrationForm).subscribe({
      next: (res: any) => {
        if(res.id === "Ok"){
          this.router.navigate(["/advent-calendar"])
        }
      },
      error: (err: any) => {
        alert(err);
      }
    })
  }

}
