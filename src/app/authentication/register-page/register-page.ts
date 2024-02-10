import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationValidators } from '../authentication-utility';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.html',
  styleUrls: ['./register-page.scss'],
})
export class RegisterPage {

  registerForm: FormGroup = this.formBuilder.group(
    {
      username: ['', Validators.required],
      password: ['', Validators.compose([Validators.required, AuthenticationValidators.securePasswordValidator])],
      passwordConfirm: ['', Validators.compose([Validators.required, AuthenticationValidators.securePasswordValidator])],
    }, 
    {
      validators: AuthenticationValidators.confirmPasswordValidator('password', 'passwordConfirm')
    }
  );



  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authentication: AuthenticationService,
  ) {}

  onSubmit(): void {
    if ( ! this.registerForm.valid ) return;

    this.authentication.register(this.registerForm.controls['username'].value, this.registerForm.controls['password'].value)
      .subscribe(res => {
        if (res === null) return;

        this.router.navigate(['/login'])
      })
  }

}
