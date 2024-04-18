import { Component, ComponentFactoryResolver } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AlertComponent } from '../shared/alert/alert.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  isLoginMode = false;
  isLoading = false;
  error: string = null;
  constructor(private authSerivce: AuthService,
    private router:Router,
    private componentFactoryResolver : ComponentFactoryResolver
  ) { }
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return
    }
    const email = form.value.email;
    const password = form.value.password
    this.isLoading = true
    let authOps : Observable<AuthResponseData>
    if (this.isLoginMode) {
      authOps = this.authSerivce.logIn(email, password)
    } else {
      authOps = this.authSerivce.signUp(email, password)
    }
    authOps.subscribe(response => {
      this.error = null
      this.isLoading = false
      this.router.navigate(['/recipes'])
    }, errorMessage => {
      this.error = errorMessage
      this.isLoading = false
      this.showErrorAlert(errorMessage)
    })
    form.reset()
  }
  onHandleError(){
    this.error = null
  }
  private showErrorAlert(message:string){
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent)
  }
}
