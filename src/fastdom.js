
var measurements = []
var mutations = []

function update () {
  var callback
  while ((callback = measurements.shift())) {
    callback()
  }
  while ((callback = mutations.shift())) {
    callback()
  }
  window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)

exports.measure = function (callback) {
  measurements.push(callback)
}

exports.mutate = function (callback) {
  mutations.push(callback)
}
