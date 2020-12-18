setTimeout(() => console.log("Tick"), 500);

import { bigOak } from "../chapter11/crow-tech";
bigOak.readStorage("food caches", caches => {
  let firstCache = caches[0];
  bigOak.readStorage(firstCache, info => {
    console.log(info);
  })
})