import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {LoginService} from "./login.service";
import {AuthenticationService} from "./authentication.service";
import Swal from 'sweetalert2'
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('admin@admin.com.br', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    password: new FormControl('Admin@123', {
      nonNullable: true,
      validators: [Validators.required]
    })
  });

  constructor(private loginService: LoginService, private authenticationService: AuthenticationService, private router: Router) {
  }

  login() {

    return this.loginService.login(this.loginForm.getRawValue())
      .subscribe({
        next: token => {
          if (token) {
            this.authenticationService.setAuthToken(token);
            this.router.navigate(['/home']);
          }
        },
        error: err => Swal.fire({
          icon: 'error',
          title: 'Erro!',
          text: `Credenciais inválidas.`,
          confirmButtonColor: '#0d6efd'
        })
      });
  }

}
