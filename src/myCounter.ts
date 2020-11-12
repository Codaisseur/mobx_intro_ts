// src/myCounter.ts

import { makeObservable, observable, action } from 'mobx';

export default class MyCounter {
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

