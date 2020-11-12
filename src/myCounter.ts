// src/myCounter.ts

import { makeObservable, observable, action } from 'mobx';

class MyCounter {
  value = 0; // initial value

  constructor(value) {
    makeObservable(this, {
      value: observable,
      increase: action,
      decrease: action
    });

    this.value = value;
  }

  increase(by: number = 1) {
    this.value = this.value + by;
  }

  decrease(by: number = 1) {
    this.value = this.value - by;
  }
}


const counter = new MyCounter(0);

// predict: what will be console logged?
console.log(counter.value);

counter.increase()
// predict: what will be console logged?
console.log(counter.value);

counter.decrease()
// predict: what will be console logged?
console.log(counter.value);

counter.increase(10)
// predict: what will be console logged?
console.log(counter.value);
