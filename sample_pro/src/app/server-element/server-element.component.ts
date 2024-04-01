import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css'
})
export class ServerElementComponent implements OnInit ,OnChanges ,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  @Input('srvElement') element : {type:string,name:string,content:string}
  @Input() name :string;
  constructor(){
    console.log('hello')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  ngOnInit(): void {
    console.log('dd')
  }
  ngDoCheck(): void {
    console.log('do check called')
  }
  ngAfterContentInit(): void {
    
  }
  ngAfterContentChecked(): void {
    
  }
  ngAfterViewChecked(): void {
    
  }
  ngAfterViewInit(): void {
    
  }
}
