import { EMPTY, of } from "rxjs";

import { defaultIfEmpty } from "rxjs/internal/operators/defaultIfEmpty";

const observable$ = of();

observable$.pipe(defaultIfEmpty("DEFAULT_VALUE")).subscribe((value) => {
  console.log("###########################");
  console.log("sets default value if observable is empty");
  console.log(value);
  console.log("###########################");
});

const observableNotEmpty$ = of(1);
observableNotEmpty$.pipe(defaultIfEmpty("DEFAULT_VALUE")).subscribe((value) => {
  console.log("###########################");
  console.log("does not set default value if observable is not empty");
  console.log(value);
  console.log("###########################");
});

const observableUndefined$ = of(undefined);
observableUndefined$.pipe(defaultIfEmpty("DEFAULT_VALUE")).subscribe((value) => {
  console.log("###########################");
  console.log("does not set default value if observable is undefined");
  console.log(value);
  console.log("###########################");
});

/* const observableFromEmpty$ = empty(); */
const observableFromEmpty$ = EMPTY;
observableFromEmpty$.pipe(defaultIfEmpty("DEFAULT_VALUE")).subscribe((value) => {
  console.log("###########################");
  console.log("sets default value if observable is empty");
  console.log(value);
  console.log("###########################");
});

/**
 * Sets the defaults value if the observable is empty
 * Does not set the default value if the observable is not empty
 * Does not set the default value if the observable is undefined
 *
 * RxJS defaultIfEmpty() operator is a conditional operator used to emit a given value
 * if the source observable completes without emitting any next value. Otherwise,
 * it mirrors the source observable.
 * It returns the values emitted by the source observable or a specified default value
 * if the source observable is empty.
 */
