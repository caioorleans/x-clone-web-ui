import { Component } from '@angular/core';
import { ButtonsModule } from '../../../components/buttons/buttons.module';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../service/auth/auth.service';
import { LoginRequest } from '../../../dto/requests/loginRequest.dto';
import { SessionService } from '../../../service/session/session.service';
import { Modal } from 'flowbite';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {

  loginForm:FormGroup;
  isLoading:boolean = false;
  errorMessage:string = ""

  constructor(
    private router:Router,
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private sessionService:SessionService){
      this.loginForm = formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(4)]]
      })
  }

  login = () => {
    this.isLoading = true;
    this.authService.login({
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value
    }).subscribe({
      next: (r:any) => {
        this.isLoading = false;
        this.sessionService.saveUserSession(r);
        this.router.navigate(['feed']);
      },
      error: (err:any) => {
        this.errorMessage = err.error.message;
        this.isLoading = false;
      }
    })
  }

  goToForgotPassword = () => this.router.navigate(['auth/forgot-password'])

}
