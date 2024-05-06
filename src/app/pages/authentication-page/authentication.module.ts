import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../../components/logo/logo.component';
import { ButtonsModule } from '../../components/buttons/buttons.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthenticationComponent } from './authentication-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ForgotPasswordPageComponent } from './forgot-password-page/forgot-password-page.component';
import { CreateAccountPageComponent } from './create-account-page/create-account-page.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthenticationComponent,
    LoginPageComponent,
    ForgotPasswordPageComponent,
    CreateAccountPageComponent
  ],
  imports: [
    LogoComponent,
    ButtonsModule,
    RouterModule,
    RouterOutlet,
    ReactiveFormsModule
  ],
  exports: [
    AuthenticationComponent,
    LoginPageComponent,
    ForgotPasswordPageComponent,
    CreateAccountPageComponent
  ]
})
export class AuthenticationModule { }
