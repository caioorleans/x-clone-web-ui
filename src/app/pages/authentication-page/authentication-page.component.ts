import { Component } from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';
import { ButtonsModule } from '../../components/buttons/buttons.module';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-authentication',
  standalone: false,
  templateUrl: './authentication-page.component.html',
})
export class AuthenticationComponent {

  constructor(public router:Router){}

  goToLogin = () => this.router.navigate(['auth/login'])
  goToCreateAccount = () => this.router.navigate(['auth/create-account'])
  goToInitialPage = () => this.router.navigate(['auth'])
}
