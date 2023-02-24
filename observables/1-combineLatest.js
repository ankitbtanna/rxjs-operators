import { Subject, combineLatest, of } from "rxjs";

let source1 = new Subject();
let source2 = new Subject();

let source1$ = source1.asObservable();
let source2$ = source2.asObservable();

let resultSource$ = combineLatest([source1$, source2$]);
resultSource$.subscribe((values) => {
  console.log(values[0], values[1]);
});

source1.next("");
source1.next("Apple");
source2.next("1");
source2.next("2");
source1.next("Banana");
source2.next("3");
