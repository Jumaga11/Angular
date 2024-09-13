import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>{{ counter }}</h3>
    <p>contador con primer funcion</p>
    <button (click)="increaseBy()">+1</button>
    <button (click)="decreaseBy()">-1</button>
    <p>contador con segunda funcion</p>
    <button (click)="incrementOrDecrement(+1)">+1</button>
    <button (click)="reset()">reset</button>
    <button (click)="incrementOrDecrement(-1)">-1</button>
    <hr>
  `
})
export class CounterComponent {
  public counter : number = 20;

  //Forma larga de aplicar incremento y decremento
  increaseBy() : void {
    this.counter += 1;
  }
  decreaseBy() : void {
    this.counter -= 1;
  }

  //forma optima de aplicar incremento y decremento
  incrementOrDecrement( value : number) : void {
    this.counter += value;
  }
  //funcion reset
  reset() : void {
    this.counter = 10;
  }
}
