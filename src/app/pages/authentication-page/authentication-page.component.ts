import { Component } from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';
import { ButtonsModule } from '../../components/buttons/buttons.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [
    LogoComponent,
    ButtonsModule,
    RouterOutlet
  ],
  templateUrl: './authentication-page.component.html',
})
export class AuthenticationComponent {

}
