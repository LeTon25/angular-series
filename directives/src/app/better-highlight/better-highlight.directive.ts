import { Directive, ElementRef, HostListener, OnInit, Renderer2 ,Input,HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective  implements OnInit{
  @Input() defaultColor :string = 'transparent';
  @Input() highlightColor :string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor :string;
  constructor(private elementRef  :ElementRef,private renderer : Renderer2) 
  { }

  ngOnInit(): void {
    //this.renderer.setStyle(this.elementRef,'background-color','green') 
    this.backgroundColor = this.defaultColor 
  }

  @HostListener('mouseenter') mouseenter(eventData:Event){
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','green')
    this.backgroundColor = this.defaultColor
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    //this.renderer.setStyle(this.elementRef.nativeElement,'background-color','transparent')
    this.backgroundColor =  this.highlightColor
  }
}
