# Cross-Browser Support
Currently we are targeting only Chrome because current Firefox (107.0) doesn't support
- Nested `backdrop-filter`: A child element's `backdrop-filter` incorrectly overrides the parent element's `backdrop-filter` in Firefox. You can see difference at top-left window on Chrome and Firefox.
- Animating `dialog::backdrop`: `transition` in `dialog::backdrop` doesn't work in Firefox. 

However, in regard to `-webkit-text-stroke` Firefox does better job than Chrome. You can't read the text when you select text in the `Credits` dialog in Chrome, but you can in Firefox. Also, the scrollbar is prettier in Firefox.
