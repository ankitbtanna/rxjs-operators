import { map, pairwise } from "rxjs/operators";

import { from } from "rxjs";

const numbers$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

numbers$
  .pipe(
    pairwise(),
    map(([previousValue, currentValue]) => [previousValue, currentValue])
  )
  .subscribe((values) => {
    console.log(`Previous value: ${values[0]} and current value: ${values[1]}.`);
    console.log("Difference", values[1] - values[0]);
  });
