# delegate-to

<https://github.com/rwu823/delegate-to#readme>

```js
document.addEventListener('click', delegate('.btn', e => {
  console.log(e.delegateTarget)
}), false)
```

delegate() 是 event handler 的包装，不影响 addEventListener 使用 options

event object 添加了 delegateTarget，不过没有修改 currentTarget
