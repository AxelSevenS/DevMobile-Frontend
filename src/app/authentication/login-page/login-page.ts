import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.html',
  styleUrls: ['./login-page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.compose([
      Validators.minLength(5),
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
    ])],
    password: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {}

  login() {
    console.log(`${this.loginForm.controls["username"].value} - ${this.loginForm.controls["password"].value}`)
    this.authenticationService.login(this.loginForm.controls["username"].value, this.loginForm.controls["password"].value)
      .subscribe(u => {
        if (u === null) {
          window.location.reload();
        }
        this.router.navigate(['/home'])
      })
  }

}
