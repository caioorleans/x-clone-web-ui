import { Component } from '@angular/core';
import { AuthService } from '../../../service/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../../../validators/password-validator';

@Component({
  selector: 'app-forgot-password-page',
  standalone: false,
  templateUrl: './forgot-password-page.component.html',
})
export class ForgotPasswordPageComponent {

  form1: FormGroup;
  form2: FormGroup;
  form3: FormGroup;

  loading:boolean = false;
  message:string|undefined;
  tokenLength:number = 6;

  part:number = 1;

  constructor(
    private authService:AuthService,
    private formBuilder:FormBuilder
  ){
    this.form1 = formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    })
    this.form2 = formBuilder.group({
      token: ['', [Validators.required, Validators.minLength(this.tokenLength), Validators.maxLength(this.tokenLength)]]
    })
    this.form3 = formBuilder.group({
      password: ['', [Validators.required, PasswordValidator(4,20)]],
      passwordConfirmation: ['', [Validators.required]],
    })
  }

  sendResetPasswordToken(){
    this.loading = true;
    this.authService.sendResetPasswordToken(this.form1.get('email')?.value).subscribe({
      next: (r:any) => {
        this.loading = false;
        this.message = undefined;
        this.continue();
      },
      error: (err) => {
        this.loading = false;
        this.message = err.error.message;
      }
    })
  }

  updatePassword(){
    this.loading = true;
    this.authService.updateUserPassword({
      token: this.form2.get('token')?.value.trim(),
      password: this.form3.get('password')?.value.trim(),
      passwordConfirmation: this.form3.get('passwordConfirmation')?.value.trim()
    }).subscribe({
      next: (r) => {
        this.loading = false;
        this.continue();
      },
      error: (err) => {
        this.loading = false;
        this.message = err.error.message;
      }
    })
  }

  goBack = () => {
    this.part--;
    this.message = undefined;
  }
  continue = () => {
    this.part++;
    this.message = undefined;
  }

}
