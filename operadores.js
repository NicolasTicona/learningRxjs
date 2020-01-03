// import {of} from 'rxjs'

let {of, from, Subject,concat, Observable} = rxjs;
let {map, take, scan } = rxjs.operators;

// Of Operator
const ofDataSource = of(1,2,3,4,5)
ofDataSource
    .pipe(
        map(val => val)
    )
    .subscribe(resp => {
        console.log(resp)
    })

// Filter Operator
const numbers = from(['a','b','c','d','e'])
numbers
    .pipe(
        take(3),
        map(val => val.toUpperCase())
    )
    .subscribe(resp => {
        console.log(resp)
    })

// Scan Operator
const source = of(1,2,3,4,5)
source
    .pipe(
        scan((acc, curr) => acc+curr, 0)
    )
    .subscribe(resp => {
        console.log(resp)
    })

console.log('==== SUBJECT')
// Subject
const sub = new Subject()

sub.subscribe(console.log)

sub.next(1)
sub.next(2)
sub.next(3)
sub.next(4)

// sub.subscribe(console.log)
// sub.subscribe(console.log)
// sub.subscribe(console.log)

console.log('==== CONCAT')
// Concat
const o1 = of(1)
const o2 = of(2)
const o3 = of(3)

concat(
    o1,o2,o3
).subscribe(values => {
    console.log(values)
})