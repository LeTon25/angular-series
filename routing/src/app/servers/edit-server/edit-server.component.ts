import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactive-offguard.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit ,CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSave = false;
  constructor(private serversService: ServersService,
              private route:ActivatedRoute,
              private router: Router) { }
  canDeactivate(): boolean | Promise<boolean> | Observable<boolean>{
      if(!this.allowEdit){
        return true
      }
      if((this.serverName !== this.server.name || this.serverStatus !== this.server.status ) && !this.changesSave){
        return confirm('Do you want to discard change')
      }else{
        return true
      }
  }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (param:Params)=>{
        console.log(param['allowEdit'])
        this.allowEdit = param['allowEdit'] == '1' ? true : false; 
      }
    );
    this.route.fragment.subscribe();
    const id= +this.route.snapshot.params['id']
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSave = true;
    this.router.navigate(['../'],{relativeTo: this.route})
  }

}
