import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  @Output() inviaDati: EventEmitter<any> = new EventEmitter();

  registrationForm!: FormGroup;
  hidePassword: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup( {
      nome: new FormControl('', [Validators.required]),
      cognome: new FormControl('', [Validators.required]),
      // indirizzo: new FormControl('', [Validators.required]),
      // città: new FormControl('', [Validators.required]),
      cellulare: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  registraDati(){
    this.inviaDati.emit(this.registrationForm.value)
  }



}
