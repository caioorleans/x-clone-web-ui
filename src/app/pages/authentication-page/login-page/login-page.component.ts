import { Component } from '@angular/core';
import { ButtonsModule } from '../../../components/buttons/buttons.module';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import { LoginRequest } from '../../../dto/requests/LoginRequest.dto';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {

  loginForm:FormGroup;
  isLoading:boolean = false;

  constructor(
    private router:Router,
    private formBuilder:FormBuilder,
    private authService:AuthService ){
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
        console.log(r);
        this.isLoading = false;
      },
      error: (err:any) => {
        console.log(err);
        this.isLoading = false;
      }
    })
  }

  goToForgotPassword = () => this.router.navigate(['auth/forgot-password'])

}
