# jQuery

[jQuery 的实现](https://github.com/jquery/jquery/blob/master/src/event.js#L294)

https://learn.jquery.com/events/event-delegation/

```js
$(li).on('a', function (event) {
  // jQuery 修改了 event object
  // event.delegateTarget = li
  // event.currentTarget = this = a
  // event.target = b
})
```
