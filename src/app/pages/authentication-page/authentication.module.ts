import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../../components/logo/logo.component';
import { ButtonsModule } from '../../components/buttons/buttons.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthenticationComponent } from './authentication-page.component';
import { LoginPageComponent } from './login-page/login-page.component';



@NgModule({
  declarations: [
    //AuthenticationComponent,
    //LoginPageComponent,
  ],
  imports: [
    CommonModule,
    LogoComponent,
    ButtonsModule,
    RouterModule,
    RouterOutlet
  ]
})
export class AuthenticationModule { }
