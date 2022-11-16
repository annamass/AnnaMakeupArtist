import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm!: FormGroup;
  hidePassword: boolean = true;

  @Output() onLogin: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup( {
      nomeUtente: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  login(){
    this.onLogin.emit(this.loginForm.value);
  }

}
