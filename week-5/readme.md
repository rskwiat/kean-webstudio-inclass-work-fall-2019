# Items Covered

---

## HTML Tags

### Layout Tags

`nav`

`ul`

`li`

`a`

### Security Concerns

target="_blank"
`rel="

https://mathiasbynens.github.io/rel-noopener/

## CSS Tags


CSS Variables

`:root` selector

The :root CSS pseudo-class matches the root element of a tree representing the document.

`CSS Variables`

Property names that are prefixed with `--`, like `--example-name`, represent custom properties that contain a value that can be used in other declarations using the `var()` function.

The `var()` CSS function can be used to insert the value of a custom property (sometimes called a "CSS variable") instead of any part of a value of another property.

```
:root {
  --background: #eee;
}

body {
  background: var(--background);
}
```

`:nth-child(n)`

The :nth-child() CSS pseudo-class matches elements based on their position in a group of siblings.

https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child


`:last-child`

The `:last-child` CSS pseudo-class represents the last element among a group of sibling elements.

`text-decoration`
```
  a {
    text-decoration: none;
  }
```

The text-decoration attribute defines whether text is decorated with an underline, overline and/or strike-through.

`transition`

The transition CSS property is a shorthand property for transition-property, transition-duration, transition-timing-function, and transition-delay.

Transitions enable you to define the transition between two states of an element. 

```
  a {
    /* property, duration, timing function, delay */
    transition: background 450ms ease-in-out;
  }
```

`box-shadow`

```
.element {
  /* offset-x | offset-y | blur-radius | spread-radius | color */
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}
```

The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radii, and color.

`position: fixed`

The position CSS property sets how an element is positioned in a document. 

The element is removed from the normal document flow, and no space is created for the element in the page layout. Its final position is determined by the values of top, right, bottom, and left.

`align-items`

The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis.
  

### Dark Theme

https://developer.apple.com/videos/play/wwdc2019/518

https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme