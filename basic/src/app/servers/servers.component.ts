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
  serverCreationStatus= "Not";
  serverName ='';
  serverCreated = false;
  constructor(){
    setTimeout(()=>{
      this.allowAddServer = true
    },200)
  }
  ngOnInit(): void {
    
  }

  onCreateServer() : void{
      this.serverCreated = true;
      this.serverCreationStatus = "Server was created " + this.serverName;
  }
  onUpdateServerName(event:any) : void{
     this.serverName = (<HTMLInputElement>event.target).value;
  }
}
