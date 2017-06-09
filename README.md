# dom-event-delegation

DOM event delegation 利用事件冒泡。

```
delegateTarget.addEventListener()
  |
  | element.matches(selector)
  |
event.target
```

除了 jQuery，[其它实现](https://github.com/search?l=JavaScript&q=delegate)

test 考查

- 当 currentTarget 匹配 selector 时会怎样？
- 从 target 向上查找时，到达 currentTarget 时会怎样？

不同的回答反映不同的设计，通常采用 jQuery 的设计，即 selector matched element 应该是 currentTarget 的后代。

## License

MIT (c) Ivan Yan
