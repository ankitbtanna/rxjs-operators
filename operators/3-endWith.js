import { endWith, of } from "rxjs";

const fruits$ = of("Apple", "Banana", "Orange", "Grapes");

fruits$.pipe(endWith("All fruits logged!")).subscribe((value) => {
  console.log("###########################");
  console.log(value);
  console.log("###########################");
});

/**
 * Adds the value to the beginning of the observable stream
 * Useful when making API calls to add a loading state
 * Useful when making API calls to add a default value, like an empty array when fetching list of items
 */
