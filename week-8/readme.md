# Items Covered

---

## Page / Web Inspector

https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector

Use the Page Inspector to examine and modify the HTML and CSS of a page. Very useful for debugging and visualizes any inconsistencies.

## Flexbox Guides

https://css-tricks.com/snippets/css/a-guide-to-flexbox/

https://developer.mozilla.org/en-US/docs/Glossary/Flexbox

## Flexbox

These properites can only be used in conjuction with `display: flex` on your element.


```
  flex-wrap: wrap;
```

The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked. 

https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap

```
  justify-content: center;
```

The CSS justify-content property defines how the browser distributes space between and around content items along the `main-axis` (row or column) of a flex container, and the inline axis of a grid container.

https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content


```
  align-items: center;
```
The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. 

https://developer.mozilla.org/en-US/docs/Web/CSS/align-items

```
  order: 1;
```

The order CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending order value and then by their source code order.

https://developer.mozilla.org/en-US/docs/Web/CSS/order

```
  flex: 1 0 50%; /* grow shrink basis */
```

The flex CSS property sets how a flex item will grow or shrink to fit the space available in its flex container. It is a shorthand for flex-grow, flex-shrink, and flex-basis.

### Flex Grow

The flex-grow CSS property sets the flex grow factor of a flex item main size. It specifies how much of the remaining space in the flex container should be assigned to the item (the flex grow factor).

### Flex Shrink

The flex-shrink CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to flex-shrink.

### Flex Basis

The flex-basis CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with box-sizing.
