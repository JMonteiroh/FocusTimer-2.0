
import Controls from "./controls.js";
import Events from "./events.js";
import {
  buttonPlay,
  buttonStop,
  buttonMore,
  buttonLess,
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFireplace,
} from "./elements.js";


const controls = Controls({
  buttonPlay,
  buttonStop,
  buttonMore,
  buttonLess,
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFireplace,
})


Events({controls})