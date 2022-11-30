import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  @Output() inviaDati: EventEmitter<any> = new EventEmitter();

  registrationForm!: FormGroup;
  hidePassword: boolean = true;
  formError: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      cognome: new FormControl('', [Validators.required]),
      telefono: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      nomeUtente: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  registraDati() {
    if (this.registrationForm.status === "VALID") {
      this.inviaDati.emit(this.registrationForm.value)
    } else {
      this.formError = true;
      setTimeout(() => {
        this.formError = false;
      }, 5000);
    }
  }

  goToLogin() {
    this.router.navigate(["/login"]);
  }



}
