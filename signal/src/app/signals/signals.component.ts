import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css'],
  imports:[CommonModule]
})
export class SignalsComponent {
  actions = signal<string[]>([]);
  counter = signal(0);
  doubleCounter = computed(()=>{  this.counter() * 2})
  constructor(){
    effect(()=>{
      console.log(this.counter())
    })
  }
  increment() {
    this.counter.update((oldCounter)=> oldCounter + 1);
    this.actions.mutate((oldValue)=>{ oldValue.push('INCREMENT') });
  }

  decrement() {
    this.counter.update((oldCounter)=> oldCounter - 1);
    this.actions.mutate((oldValue)=>{ oldValue.push('DECREMENT') });
  }
}
