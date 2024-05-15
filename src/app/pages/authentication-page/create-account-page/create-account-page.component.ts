import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../service/auth/auth.service';
import { UserService } from '../../../service/user/user.service';
import { dateValidator } from '../../../validators/date-validator';
import { nameValidator } from '../../../validators/name-validator';
import { UsernameValidator } from '../../../validators/username-validator';
import { PasswordValidator } from '../../../validators/password-validator';
import { Router } from '@angular/router';
import { SessionService } from '../../../service/session/session.service';
import { ModalService } from '../../../service/modal/modal.service';

@Component({
  selector: 'app-create-account-page',
  standalone: false,
  templateUrl: './create-account-page.component.html'
})
export class CreateAccountPageComponent {

  isLoading:boolean = false;
  isPart1:boolean = true
  showError:boolean = false;

  form1:FormGroup;
  form2:FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService,
    private userService:UserService,
    private sessionService:SessionService,
    private modalService:ModalService,
    private router:Router
  ){
    this.form1 = this.formBuilder.group({
      nome: ['', [Validators.required, nameValidator(4, 50)]],
      email: ['', [Validators.required, Validators.email]],
      birthday: ['', [Validators.required, dateValidator()]]
    })

    this.form2 = this.formBuilder.group({
      username: ['', [Validators.required, UsernameValidator(4,20)]],
      password: ['', [Validators.required, PasswordValidator(4,20)]],
      passwordConfirmation: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  goNext = () =>{
    this.isLoading = true;
    this.userService.existsByEmail(this.form1.get('email')?.value).subscribe({
      next: (r:any) => {
        this.isLoading = false;
        if(!r){
          this.isPart1 = false;
          this.showError = false;
          console.log({
            nome: this.form1.get('nome')?.value,
            email: this.form1.get('nome')?.value,
            aniversario: this.form1.get('birthday')?.value
          })
        }
        else{
          this.showError = true;
        }
      },
      error:(err:any) => {
        this.isLoading = false;
      },
    })
  }

  createAccount = () => {
    this.isLoading = true;
    this.userService.existsByUsername(this.form2.get('username')?.value).subscribe({
      next: (r:any) => {
        this.isLoading = false;
        if(r){
          this.showError = true;
        }
        else{
          this.showError = false;
          this.userService.createUser({
            email: this.form1.get('email')?.value.trim(),
            name: this.form1.get('nome')?.value.trim(),
            birthday: new Date(this.form1.get('birthday')?.value),
            username: this.form2.get('username')?.value.trim(),
            password:this.form2.get('password')?.value.trim(),
            passwordConfirmation:this.form2.get('passwordConfirmation')?.value.trim()
          }).subscribe({
            next: (r:any) => {
              this.modalService.hideModal();
              this.sessionService.saveUserSession(r);
              this.router.navigate(['feed']);
            },
            error: (err:any) => {
              console.log(err)
            }
          })
        }
      },
      error: (err:any) => {
        this.isLoading = false;
      }
    })
  }

  goBack = () => {
    this.isPart1 = true 
    this.showError = false
  }

  showErrors = () => console.log(this.form1.get('nome')?.errors)
}
