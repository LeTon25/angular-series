import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.css'],
  imports:[CommonModule]
})
export class SignalsComponent {
  actions: string[] = [];
  counter = signal(0);

  increment() {
    this.counter.update((oldCounter)=> oldCounter + 1);
    this.actions.push('INCREMENT');
  }

  decrement() {
    this.counter.update((oldCounter)=> oldCounter - 1);
    this.actions.push('DECREMENT');
  }
}
