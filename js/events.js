import {
  buttonPlay,
  buttonStop,
  buttonMore,
  buttonLess,
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFireplace,
} from "./elements.js"

export default function({controls}) {
  buttonPlay.addEventListener('click', function() {
    controls.play()
  })
  
  buttonStop.addEventListener('click', function() {
    controls.stop()
  })

  buttonMore.addEventListener('click', function() {
    controls.more()
  })

  buttonLess.addEventListener('click', function() {
    controls.less()
  })

  buttonForest.addEventListener('click', function() {
    controls.forest()
  })

  buttonRain.addEventListener('click', function() {
    controls.rain()
  })
  
  buttonCoffee.addEventListener('click', function() {
    controls.coffee()
  })

  buttonFireplace.addEventListener('click', function() {
    controls.fireplace()
  })
}