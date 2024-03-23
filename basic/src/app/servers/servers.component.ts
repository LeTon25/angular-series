import { Component } from '@angular/core';
import { ServerComponent } from '../server/server.component';
@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [ServerComponent],
  template: '<app-server></app-server> <app-server></app-server> <app-server></app-server>',
  styleUrl: './servers.component.css'
})
export class ServersComponent {

}
