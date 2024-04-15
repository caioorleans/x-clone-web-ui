import { Component } from '@angular/core';
import { ButtonsModule } from '../../../components/buttons/buttons.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
})
export class LoginPageComponent {

  constructor(private router:Router){}
  goToForgotPassword = () => this.router.navigate(['auth/forgot-password'])

}
