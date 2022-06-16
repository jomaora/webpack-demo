// si quiero ejecutar el script sin transpilar, usar import - export va a poner problemas de tipo
// Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
// o SyntaxError: Cannot use import statement outside a module
// entonces hay que poner require porque nodejs se espera a tener una syntaxis CommonJS y no ESModules (import/export)

import { DateTime } from "luxon";

const main = () => {
  const fecha = DateTime.now().plus ({days: 6});
  console.log(fecha);
};

main();
