import { DateTime } from "luxon";

const fecha = DateTime.now().plus ({days: 6});
console.log(fecha);