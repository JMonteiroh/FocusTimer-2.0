export default function Controls({
  buttonPlay,
  buttonStop,
  buttonMore,
  buttonLess,
  buttonForest,
  buttonRain,
  buttonCoffee,
  buttonFireplace,
}) {
  function play() {
    buttonPlay.classList.add('hide-buttons')
    buttonStop.classList.remove('hide-buttons')
  }

  function stop() {
    buttonPlay.classList.remove('hide-buttons')
    buttonStop.classList.add('hide-buttons')
  }

  function more() {
    function moreRemove() {
      buttonMore.classList.remove('hide-buttons')
    }

    buttonMore.classList.add('hide-buttons')

    setTimeout(moreRemove, 200)
  }

  function less() {
    function lessRemove() {
      buttonLess.classList.remove('hide-buttons')
    }

    buttonLess.classList.add('hide-buttons')

    setTimeout(lessRemove, 200)
  }

  function forest() {
    buttonCoffee.classList.remove('hide')
    buttonRain.classList.remove('hide')
    buttonFireplace.classList.remove('hide')
    buttonForest.classList.add('hide')
  }

  function rain() {
    buttonCoffee.classList.remove('hide')
    buttonRain.classList.add('hide')
    buttonFireplace.classList.remove('hide')
    buttonForest.classList.remove('hide')
  }

  function coffee() {
    buttonCoffee.classList.add('hide')
    buttonRain.classList.remove('hide')
    buttonFireplace.classList.remove('hide')
    buttonForest.classList.remove('hide')
  }

  function fireplace() {
    buttonCoffee.classList.remove('hide')
    buttonRain.classList.remove('hide')
    buttonFireplace.classList.add('hide')
    buttonForest.classList.remove('hide')
  }


  return {
    play,
    stop,
    more,
    less,
    forest,
    rain,
    coffee,
    fireplace,
  }


}
