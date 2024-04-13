import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenUserName = ['Chris', 'Anna']
  signUpForm: FormGroup
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email],this.forbiddenEmails),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    })
  }
  onSubmit() {
    console.log(this.signUpForm);
  }

  get controls() {
    return (this.signUpForm.get('hobbies') as FormArray).controls;
  }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control)
  }
  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserName.indexOf(control.value) !== -1) {
      return { 'forbiddenName': true }
    }
    return null
  }
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout((resolve, reject) => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden' : true})
        }else{
          resolve(null)
        }
      }, 1500)
    })
    return promise;
  }
}
