
// ==========================================================
// Operador fromEvent
const link = document.body;

const obs = {
    next(value) {
        console.log(value);
    },
    error(err) {
        console.error(err);
    },
    complete() {
        console.log("Completed");
    }
};


// Create an Observable from event
const observable = rxjs.fromEvent(link, "click");
// Subscribe to begin listening for async result
// observable.subscribe(obs);

// ==========================================================

// Operador Create
/*
  Create an observable that emits 'Hello' and 'World' on
  subscription.
*/
const hello = rxjs.Observable.create((observer) => {
  observer.next('Hello');
  observer.next('World');
});

//output: 'Hello'...'World'
const subscribe = hello.subscribe(val => console.log(val));

// ==========================================================

// Operador From
//emit array as a sequence of values
const arraySource = rxjs.from([1, 2, 3, 4, 5]);
//output: 1,2,3,4,5
// arraySource.subscribe(val => console.log(val));

//emit result of promise
// const promiseSource = from(new Promise(resolve => resolve('Hello World!')));
//output: 'Hello World'
// const subscribe = promiseSource.subscribe(val => console.log(val));

//emit string as a sequence
// const source = from('Hello World');
//output: 'H','e','l','l','o',' ','W','o','r','l','d'
// const subscribe = source.subscribe(val => console.log(val));


// ==========================================================

// filters
const filterNumbers = rxjs.from([1,2,3,4,5,6])
const operators = rxjs.operators
filterNumbers
  .pipe(
    operators.filter(n => n > 4)
  )
  .subscribe(val => console.log(val))


// map
const numbers = rxjs.from([1, 2, 3])
numbers
   .pipe(operators.map(x => 10 * x))
   .subscribe(n => console.log(n))

// reduce
const suma = rxjs.from([1,10,20,30])
suma
    .pipe(operators.reduce( (x,y) => x + y))
    .subscribe(n => console.log(n))

  
console.log('FlatMap =======')
// flatmap
const values = rxjs.from([
  rxjs.of(1,2,3),
  rxjs.of(6,7,8),
  rxjs.of(11,12,13)
])

values
  .pipe(operators.flatMap(v => v))
  .subscribe(v => console.log(v))

// concatmap
// const values = rxjs.from([
//   rxjs.of(1,2,3),
//   rxjs.of(4,5,6),
//   rxjs.of(7,8,9)
// ])

// values
// .pipe(operators.concatMap(v =>v))
// .subscribe(v => console.log(v))

const zipnumbers = rxjs.of(1,2,3,4,5)
const zipstrings = rxjs.of('a','b','c','d','e')

rxjs.zip(zipnumbers, zipstrings, (n,s) => (n+s))
  .subscribe(v => console.log(v))