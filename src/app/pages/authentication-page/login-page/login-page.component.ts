import { Component } from '@angular/core';
import { ButtonsModule } from '../../../components/buttons/buttons.module';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ButtonsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
