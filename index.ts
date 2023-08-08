import { map, mergeAll } from 'rxjs/operators';
import { of } from 'rxjs';

// https://www.learnrxjs.io/learn-rxjs/operators/combination/mergeall

// Collect and subscribe to all observables

const samplePromise = (val) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(`Promise El_: ${val}`), 2000)
  );
//emit 1,2,3
const srcList = of(1, 2, 3);

const exmpl = srcList.pipe(
  //map each value to promise
  map((val) => samplePromise(val)),
  //emit result from source
  mergeAll()
);

const subscribe = exmpl.subscribe((val) => console.log(val));
