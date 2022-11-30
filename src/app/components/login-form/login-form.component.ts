import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm!: FormGroup;
  hidePassword: boolean = true;
  formError: boolean = false;

  @Output() onLogin: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      nomeUtente: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  login() {
    if (this.loginForm.status === "VALID") {
      this.onLogin.emit(this.loginForm.value);
    } else {
      this.formError = true;
      setTimeout(() => {
        this.formError = false;
      }, 5000);
    }
  }

  goToRegister() {
    this.router.navigate(["/register"]);
  }

}
