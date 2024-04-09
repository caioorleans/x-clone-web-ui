import { Component } from '@angular/core';
import { LogoComponent } from '../../../components/logo/logo.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    LogoComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
