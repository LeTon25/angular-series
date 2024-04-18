import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  isLoginMode = false;
  isLoading = false;
  error:string = null;
  constructor(private authSerivce: AuthService) { }
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return
    }
    const email = form.value.email;
    const password = form.value.password
    this.isLoading =true 
    if (this.isLoginMode) {

    } else {
      this.authSerivce.signUp(email, password).subscribe(response => {
        console.log(response)
        this.isLoading = false
      }, error => {
        console.log(error)
        error = 'A error occur'
        this.isLoading = false
      })
    }
    form.reset()
  }
}