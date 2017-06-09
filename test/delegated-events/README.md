# delegated-events

https://github.com/dgraham/delegated-events#readme

readme 对 event delegation 讲解不错，但是 API 设计比较别扭

```js
on('click', '.js-button', function(event) {
  console.log('clicked', event.target);
});
```

Globally delegated events 用 jQuery 表示即 `$(document).on(selector, type, handler)`，而不是常见的
`$elem.on(selector, type, handler)`。readme 说这是为了考虑 $elem 是动态创建的情况。这是过于考虑了，反而失去了灵活性。

