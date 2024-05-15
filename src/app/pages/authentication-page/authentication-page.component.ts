import { Component } from '@angular/core';
import { LogoComponent } from '../../components/logo/logo.component';
import { ButtonsModule } from '../../components/buttons/buttons.module';
import { Router, RouterOutlet } from '@angular/router';
import { ModalService } from '../../service/modal/modal.service';

@Component({
  selector: 'app-authentication',
  standalone: false,
  templateUrl: './authentication-page.component.html',
})
export class AuthenticationComponent {

  constructor(
    public router:Router,
    public modalService:ModalService
  ){}

  goToLogin = () => {
    this.modalService.showModal();
    this.router.navigate(['auth/login'])
  }
  goToCreateAccount = () => {
    this.modalService.showModal();
    this.router.navigate(['auth/create-account'])
  }
  goToInitialPage = () => {
    this.modalService.hideModal()
    this.router.navigate(['auth'])
  }
}
