import { defaultIfEmpty } from "rxjs/internal/operators/defaultIfEmpty";
import { of } from "rxjs";

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

/**
 * Sets the defaults value if the observable is empty
 * Does not set the default value if the observable is not empty
 * Does not set the default value if the observable is undefined
 */
