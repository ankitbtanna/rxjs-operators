import { from, iif, mergeMap, of } from "rxjs";

const startsWithA$ = of("starting with A");
const notStartsWithA$ = of("not starting with A");

const allFruits$ = from([
  "Apple",
  "Banana",
  "Açaí",
  "Acerola Cherries",
  "Grapes",
  "African Breadfruit",
  "Akebi Fruit",
  "Orange",
  "Alpine Strawberry",
  "African Mango",
  "Amanatsu oranges",
]);

allFruits$
  .pipe(mergeMap((fruit) => iif(() => fruit.startsWith("A"), startsWithA$, notStartsWithA$)))
  .subscribe((value) => {
    console.log(value);
  });
