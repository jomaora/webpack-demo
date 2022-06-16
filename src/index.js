// si quiero ejecutar el script sin transpilar, usar import - export va a poner problemas de tipo
// Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
// o SyntaxError: Cannot use import statement outside a module
// entonces hay que poner require porque nodejs se espera a tener una syntaxis CommonJS y no ESModules (import/export)

import { DateTime } from "luxon";
import {random, times} from "lodash/fp";
// import {random} from "lodash";

// const { DateTime } = require("luxon");
// const { random, times } = require("lodash/fp");

const main = () => {
  const fecha = DateTime.now().plus ({days: 6});
  console.log(fecha);

  // const t = times(() => random(0, 10), 5);
  // const [, t2, , t4, ] = t;

  // const [, t2, , t4, ] = [random(10), random(10), random(10), random(10), random(10)];
  // console.log(t2, t4);
  const t = times(() => random(0, 10), 5);
  console.log('My random number', random(0, 5));
  console.log('My array', t);
};

main();