import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  @Output() serverCreated = new  EventEmitter<{serverName : string,serverContent :string}>;
  @Output() blueprintCreated = new EventEmitter<{bpName:string,bpContent:string}>;
  constructor(){}

  ngOnInit(): void {
    
  }
  onAddServer() {
    this.serverCreated.emit({
      serverName : this.newServerName,
      serverContent :this.newServerContent
    })
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      bpName:this.newServerName,
      bpContent:this.newServerContent
    })
  }
}
