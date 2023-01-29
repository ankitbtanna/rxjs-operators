import * as dotenv from "dotenv";

import { concat, from, of } from "rxjs";
import { every, tap } from "rxjs/operators";

import { fromFetch } from "rxjs/fetch";

dotenv.config({
  path: "../.env",
});

const observable$ = from([1, 2, 3, 4, 5]);

const allEvens$ = observable$.pipe(every((value) => value % 2 === 0));

allEvens$.subscribe((value) => {
  console.log("###########################");
  console.log(value);
  console.log("###########################");
});

// https://api.jsonbin.io/v3/b/63d53c3dc0e7653a056341bd
// https://api.jsonbin.io/v3/b/63d53c4debd26539d06a00f6
// https://api.jsonbin.io/v3/b/63d53c7bace6f33a22ca2ef4

const bin1$ = fromFetch("https://api.jsonbin.io/v3/b/63d53c3dc0e7653a056341bd", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "X-MASTER-KEY": process.env.MASTER_KEY,
    "X-ACCESS-KEY": process.env.ACCESS_KEY,
  },
  /* selector: (response) => response.json(), */
}).pipe(
  tap(() => {
    console.log("Bin 1 called!");
  })
);

const bin2$ = fromFetch("https://api.jsonbin.io/v3/b/63d53c4debd26539d06a00f6---asdasdada", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "X-MASTER-KEY": process.env.MASTER_KEY,
    "X-ACCESS-KEY": process.env.ACCESS_KEY,
  },
}).pipe(
  tap(() => {
    console.log("Bin 2 called!");
  })
);

const bin3$ = fromFetch("https://api.jsonbin.io/v3/b/63d53c7bace6f33a22ca2ef4", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "X-MASTER-KEY": process.env.MASTER_KEY,
    "X-ACCESS-KEY": process.env.ACCESS_KEY,
  },
}).pipe(
  tap(() => {
    console.log("Bin 3 called!");
  })
);

/* bin1$.subscribe({
  next: (response) => {
    console.log(response.status);
  },
});

bin2$.subscribe({
  next: (response) => {
    console.log(response.status);
  },
});

bin3$.subscribe({
  next: (response) => {
    console.log(response.status);
  },
}); */

const allBins$ = concat(bin1$, bin2$, bin3$).pipe(
  every((response) => response.status === 200),
  tap((allSuccess) => {
    if (allSuccess) {
      console.log("###########################");
      console.log("All bins are available");
      console.log("###########################");
    }

    if (!allSuccess) {
      console.log("###########################");
      console.log("One or more bins are not available");
      console.log("###########################");
    }
  })
);
allBins$.subscribe();

// make one of the bins 404 and check.
