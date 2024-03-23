import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  serverID:number = 10;
  serverStatus: string = 'offline';

  getServerStatus(): string{
      return this.serverStatus;
  }
}
