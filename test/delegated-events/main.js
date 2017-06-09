import { on } from 'delegated-events'

const onClick = window.onClick

on('click', '#l1', onClick)
on('click', '#a2', onClick)
on('click', '#a3', onClick)
on('click', '#a4', onClick)

// delegated-events 比较特别
// $(document).on(name, selector, handler)
//
