createTests()

function createTests() {
  var tests = ['li a', 'a b', 'a a', 'b a']

  // create tests list
  var item = '<li id="l{i}"><a href="f.html" id="a{i}"><b id="b{i}">{text}</b></a></li>'
  var items = tests.map(function (x, i) {
    var data = { i: i + 1, text: x }
    return item.replace(/{(.*?)}/g, function (m, p) {
      return data[p]
    })
  })
  var ol = document.createElement('ol')
  ol.innerHTML = items.join('\n')
  document.body.appendChild(ol)
}

// click handler
function onClick(event) {
  event.preventDefault()
  console.log('this', this)
  var keys = ['currentTarget', 'target', 'delegateTarget']
  keys.forEach(function (k) {
    console.log('event.' + k, event[k])
  })
}
