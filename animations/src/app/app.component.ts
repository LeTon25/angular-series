import { trigger ,state, style, transition, animate} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations:[
    trigger('divState',[
      state("normal",style({
        'background-color':'red',
         transform:'translateX(0)'
      })),
      state("highlight",style({
        'background-color':'blue',
        transform:'translateX(100px)'
      })),
      transition('normal <=> highlight',animate(300)),

    ]),
    trigger('wildState',[
      state("normal",style({
        'background-color':'red',
         transform:'translateX(0) scale(1)'
      })),
      state("highlight",style({
        'background-color':'blue',
        transform:'translateX(100px) scale(1)'
      })),
      state("shrunked",style({
        'background-color':'green',
        transform:'translateX(100px) scale(0.5)'
      })),
      transition('normal <=> highlight',animate(300)),
      transition('shrunked <=> *',[
        style({'background-color' : 'orange'}),
        animate(1000,style({borderRadius :'50px'})),
        animate(500)
      ]),
    ]),
    trigger('list1',[
      state("in",style({
        'opacity':1,
         transform:'translateX(0)'
      })),
      transition('void => *',[
        style({
          opacity : 0,
          transform :'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void',[
        animate(300,style({
          opacity : 0,
          transform :'translateX(100px)'
        }))
      ])
    ]),
  ]
})
export class AppComponent {
  state = 'normal';
  wildState ='normal';
  list = ['Milk', 'Sugar', 'Bread'];

    onAdd(item) {
      this.list.push(item);
    }
    onAnimate(){
      this.state = this.state =='normal' ? 'highlight' : 'normal';
      this.wildState = this.wildState =='normal' ? 'highlight' : 'normal';
    }
    onShrunked(){
      this.wildState  = 'shrunked';
    }
    onDelete(item) {
      this.list.splice(this.list.indexOf(item), 1);
    }
}
