import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent implements OnInit {
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput',{static : true}) serverContentInput  :ElementRef;
  @Output() serverCreated = new  EventEmitter<{serverName : string,serverContent :string}>;
  @Output() blueprintCreated = new EventEmitter<{bpName:string,bpContent:string}>;
  constructor(){}

  ngOnInit(): void {
    
  }
  onAddServer(nameInput:HTMLInputElement) {
    this.serverCreated.emit({
      serverName : nameInput.value,
      serverContent :this.serverContentInput.nativeElement.value
    })
  }

  onAddBlueprint(nameInput:HTMLInputElement) {
    this.blueprintCreated.emit({
      bpName:nameInput.value,
      bpContent:this.serverContentInput.nativeElement.value
    })
  }
}
