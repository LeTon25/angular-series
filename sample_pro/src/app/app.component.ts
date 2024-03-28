import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  serverElements = [{type:'server',name:'TestServer',content:'Just a Test'}];
  constructor(){}
  onAddedServer(serverData : {serverName : string,serverContent :string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onAddedBlueprint(bluePrintData : {bpName:string,bpContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.bpName,
      content: bluePrintData.bpContent
    });
  }
  ngOnInit(): void {
    
  }

}
