import {
  SECOND,
  dayOfYear,
} from "https://deno.land/std@0.120.0/datetime/mod.ts";

console.log("Hello, Deno");
console.log(dayOfYear(new Date()));
console.log(SECOND);
