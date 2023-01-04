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
import Timer from "./timer.js"

export default function({controls, timer}) {
  buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
  })
  
  buttonStop.addEventListener('click', function() {
    controls.stop()
    timer.reset()
    
  })

  buttonMore.addEventListener('click', function() {
    controls.more()
    let newMinutes = timer.moreMinutes()
    
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })

  buttonLess.addEventListener('click', function() {
    controls.less()
    let newMinutes = timer.lessMinutes()
    
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
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