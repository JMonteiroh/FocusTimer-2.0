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

export default function({controls, timer, sound}) {
  buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
    sound.pressButton()
  })
  
  buttonStop.addEventListener('click', function() {
    controls.stop()
    timer.reset()
    sound.pressButton()    
  })

  buttonMore.addEventListener('click', function() {
    controls.more()
    let newMinutes = timer.moreMinutes()
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
    sound.pressButton()
  })

  buttonLess.addEventListener('click', function() {
    controls.less()
    let newMinutes = timer.lessMinutes()
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
    sound.pressButton()
  })

  buttonForest.addEventListener('click', function() {
    controls.forest()
    sound.pressButton()
    sound.forest()
  })

  buttonRain.addEventListener('click', function() {
    controls.rain()
    sound.pressButton()
    sound.rain()
  })
  
  buttonCoffee.addEventListener('click', function() {
    controls.coffee()
    sound.pressButton()
    sound.coffee()
  })

  buttonFireplace.addEventListener('click', function() {
    controls.fireplace()
    sound.pressButton()
    sound.fireplace()
  })
}