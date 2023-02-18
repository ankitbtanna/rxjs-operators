import { delayWhen, map, retryWhen, tap } from "rxjs/operators";
import { interval, timer } from "rxjs";

const source$ = interval(1000);
source$
  .pipe(
    map((value) => {
      if (value > 5) {
        throw value;
      }
      return value;
    }),
    retryWhen((errors) => {
      return errors.pipe(
        tap((value) => console.log(`Error ${value} was too high!`)),
        delayWhen((value) => timer(value * 1000))
      );
    })
  )
  .subscribe((value) => {
    console.log(value);
  });

/**
 * retryWhen can be used when an API throws an error and you want to retry the call
 * It can be used to retry a call after a certain amount of time or based on error code
 * 500 - You can retry, 401 - You shouldn't retry
 */
