import { from, map, pluck } from "rxjs";

const fruits$ = from([
  { name: "Apple", color: "Red" },
  { name: "Banana", color: "Yellow" },
  { name: "Orange", color: "Orange" },
  { name: "Grapes", color: "Green" },
  { name: "Pineapple", color: "Yellow" },
]);

fruits$.pipe(pluck("color")).subscribe((value) => {
  console.log("colors ", value);
});
fruits$.pipe(pluck("name")).subscribe((value) => {
  console.log("names ", value);
});

fruits$.pipe(map((fruit) => fruit.name)).subscribe((value) => {
  console.log("depreciated alternative ", value);
});

/**
 * This is depreciated, but it's a good example of how pluck works
 * It can be replaced by map
 */
