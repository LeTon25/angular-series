import { Directive ,HostBinding,HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  
  constructor() { }
  @HostBinding('class.open') open:boolean = false;
  @HostListener('click') toggleOpen(){
    this.open = !this.open;
  }
}
