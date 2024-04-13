import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') formSignUp:NgForm
  defaultQuestion:string = 'pet'
  answer:string;
  genders=['male','female']
  user ={
    username :'',
    email:'',
    secretQuestion:'',
    answer:'',
    gender:''
  }
  submitted = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.formSignUp.form.patchValue({
      userData:{
        username:  suggestedName
      }
    })
  }
  // onSubmit(form:NgForm){
  //   console.log(form)
  // }
  onSubmit(){
    this.user.username = this.formSignUp.value.userData.username;
    this.user.email = this.formSignUp.value.userData.email;
    this.user.secretQuestion =  this.formSignUp.value.secret;
    this.user.answer = this.formSignUp.value.questionAnswer;
    this.user.gender = this.formSignUp.value.gender;  
    this.submitted = true;
  }
}
