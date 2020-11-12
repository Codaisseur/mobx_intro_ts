import { autorun } from 'mobx';
import MyCounter from './myCounter';

const counter = new MyCounter(0);

// predict: what will be console logged?
autorun(() => {
    console.log(counter.value);
    // => 0
})

// predict: what will be console logged?
console.log(counter.value);
// => 0

// predict: what will be console logged?
counter.increase()
// => 1

// predict: what will be console logged?
counter.decrease()
// => 0

// predict: what will be console logged?
counter.increase(10)
// => 10

