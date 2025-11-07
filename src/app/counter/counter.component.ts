import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count = signal(0);
  doubleCount = computed(() => this.count() * 2); 
  increment() {
    this.count.update(n => n + 1);
  } 
  decrement() {
    this.count.update(n => n - 1);
  }

}
