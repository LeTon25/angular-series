import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.serive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,
      private auth:AuthService) { }

  ngOnInit() {
  }
  onLoadServer()
  {
    this.router.navigate(['/servers']);
  }
  onLoadServer1(id :number){
    this.router.navigate(['/servers',5,'edit'],{queryParams: {allowEdit:1},fragment:'loading'})
  }
  onLogin(){
    this.auth.logIn()
  }
  onLogout(){
    this.auth.logOut()
  }
}

