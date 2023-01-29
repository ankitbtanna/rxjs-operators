import { from, of } from "rxjs";
import { sequenceEqual, switchMap } from "rxjs";

const expectedSequence$ = from([4, 5, 6]);

const observable$ = of([1, 2, 3], [4, 5, 6], [7, 8, 9]);

observable$
  .pipe(
    switchMap((value) => {
      return from(value).pipe(sequenceEqual(expectedSequence$));
    })
  )
  .subscribe((isSequenceSame) => {
    console.log(isSequenceSame);
  });

/**
 * Compares the sequence of values emitted by the source observable with the provided sequence
 * Returns true if the sequences are the same, false otherwise
 *
 * Usecase: Keyboard events Ctrl + A --> Select all
 * Usecase: Keyboard events Ctrl + C --> Copy
 * Usecase: Pattern unlock
 */
