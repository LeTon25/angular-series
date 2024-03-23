import { Component, OnInit } from '@angular/core';
import { ServerComponent } from '../server/server.component';
@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [ServerComponent],
  // template: '<app-server></app-server> <app-server></app-server> <app-server></app-server>',
  templateUrl :'./servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent  implements OnInit{
  allowAddServer:boolean = false;
  constructor(){
    setTimeout(()=>{
      this.allowAddServer = true
    },200)
  }
  ngOnInit(): void {
    
  }
}
