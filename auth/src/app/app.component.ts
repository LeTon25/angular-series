import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging.serivce';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit ,OnDestroy {
  constructor(private authService : AuthService,private loggingService :LoggingService){}
  ngOnInit(): void {
    this.authService.autoLogin()
    this.loggingService.printLog('Người dùng đã đăng nhập')
  }
  ngOnDestroy(): void {
    
  }
}
