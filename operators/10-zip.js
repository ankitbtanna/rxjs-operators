import { of, zip } from "rxjs";

const souce1$ = of(1, 2, 3);
const source2$ = of("", 4, 5, 6);
const source3$ = of(7, 8, 9, 10, 11);

zip(souce1$, source2$, source3$).subscribe((value) => {
  console.log(value);
});

/**
 * zip is used to combine multiple observables into one
 * It will emit the values in the order of the first observable
 */
