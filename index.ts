import { map, mergeAll } from 'rxjs/operators';
import { of } from 'rxjs';

// Collect and subscribe to all observables

const samplePromise = (val) =>
  new Promise((resolve) => setTimeout(() => resolve(`Result: ${val}`), 2000));
//emit 1,2,3
const src = of(1, 2, 3);

const exmpl = src.pipe(
  //map each value to promise
  map((val) => samplePromise(val)),
  //emit result from source
  mergeAll()
);

const subscribe = exmpl.subscribe((val) => console.log(val));
