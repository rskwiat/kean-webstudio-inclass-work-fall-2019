# Items Covered
---

## CSS Grid

CSS Grid Layout excels at dividing a page into major regions or defining the relationship in terms of size, position, and layer, between parts of a control built from HTML primitives.

```
  display: grid;
```

https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout

https://css-tricks.com/snippets/css/complete-guide-grid/

## Picture Element

`<picture>` element contains zero or more `<source>` elements and one `<img>` element to provide versions of an image for different display/device scenarios. The browser will consider each child `<source>` element and choose the best match among them; if no matches are found or the browser doesn't support the `<picture>` element, the URL of the `<img>` element's src attribute is selected. The selected image is then presented in the space occupied by the `<img>` element.

```
<picture>
  <source srcset="/media/examples/surfer-240-200.jpg" media="(min-width: 800px)">
  <img src="/media/examples/painted-hand-298-332.jpg" />
</picture>
```

*Great for art directing photos*


## Figure Element

The HTML <figure> (Figure With Optional Caption) element represents self-contained content, potentially with an optional caption, which is specified using the (<figcaption>) element. The figure, its caption, and its contents are referenced as a single unit.

<figure>
  <img src="/media/examples/elephant-660-480.jpg" alt="Elephant at sunset">
  <figcaption>Alt Text</figcaption>
</figure>

## Forms

Forms represent a document section that contains interactive controls for submitting information to a web server.

```
<form>
  <fieldset>
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required>
  <fieldset>
   <input type="submit" value="Subscribe!">
</form>
```

The `fieldset` element is used to group several controls as well as labels (`<label>`) within a web form.

The `<input>` element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device.

https://www.wufoo.com/html5/

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input


## @supports

The `@supports` CSS at-rule lets you specify declarations that depend on a browser's support for one or more specific CSS features. This is called a feature query. The rule may be placed at the top level of your code or nested inside any other conditional group at-rule.

```
@supports (display: grid) {
  div {
    display: grid;
  }
}
```
