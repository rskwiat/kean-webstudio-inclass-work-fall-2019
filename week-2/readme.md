
# Items Covered

## HTML Tags

### Layout Tags

`<!doctype html>`

Defines the webpage - Its sole purpose is to prevent a browser from switching into so-called “quirks mode” when rendering a document; that is, the `<!DOCTYPE html>` doctype ensures that the browser makes a best-effort attempt at following the relevant specifications (HTML5.1), rather than using a different rendering mode that is incompatible with some specifications.

`<meta>`

Meta tags can contain a varity of information including - description, social media site configuration and forcing IE to render the latest version of IE.

`<meta name="viewport" content="width=device-width, initial-scale=1">`

The width property controls the size of the viewport. It can be set to a specific number of pixels like `width=600` or to the special value device-width, which is the width of the screen in CSS pixels at a scale of 100%. (There are corresponding height and device-height values, which may be useful for pages with elements that change size or position based on the viewport height.)

The initial-scale property controls the zoom level when the page is first loaded. The maximum-scale, minimum-scale, and user-scalable properties control how users are allowed to zoom the page in or out.

`<title>`

The title tag defines the document's title that is shown in a browser's title bar or a page's tab. It only contains text; tags within the element are ignored.

`<main>`

The `main` tag represents the dominant content of the `<body>` of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application.

`<div class="" id="" role="">`

`<div class="container">`
HTML Attribute of class - Often used with CSS to style elements with common properties.

[Full list of HTML Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)

`role="*"`

Defines the ARIA landmark role

[MDN Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles)

### Comments in HTML and CSS

```
Comments are human readable notes for you or other developers

HTML:

<!-- Comment -->

CSS:

/* Comment here */

```



### CSS 
```
* { box-sizing: border-box}
```

border-box tells the browser to account for any border and padding in the values you specify for an element's width and height. 

If you set an element's width to 100 pixels, that 100 pixels will include any border or padding you added, and the content box will shrink to absorb that extra width. **This typically makes it much easier to size elements.**

### REM, PX, and EM Units

For more information about this topic please read Chapter 2 of Reponsive Web Design Vol 2.


```

target / context = result

h1 { font-size: 24px }
h1 { font-size: 1.5em } 24 / 16 = 1.5
```

The benefit of using relative units is that with some careful planning you can make it so the size of text or other elements scale relative to everything else on the page.

```
em - Font size of the parent element.
rem - font size of root element
```

Not relative to anything else and are generally considered to always be the same size.

```
px 	Pixels 	1px = 1/96th of 1in
```


### Box Model

`margin`

Margin sets the margin area on all four sides of an element. It is a shorthand for margin-top, margin-right, margin-bottom, and margin-left. Part of the box-model.

`padding`

Padding sets the padding area on all four sides of an element. It is a shorthand for padding-top, padding-right, padding-bottom, and padding-left. Part of the box-model.

#### Setting Margin / Padding

1. When one value is specified, it applies the same margin to all four sides.
2. When two values are specified, the first margin applies to the top and bottom, the second to the left and right.
3. When three values are specified, the first margin applies to the top, the second to the left and right, the third to the bottom.
4. When four values are specified, the margins apply to the top, right, bottom, and left in that order (clockwise).


`border`

Border property sets an element's border. It sets the values of `border-width`, `border-style`, and `border-color`. Part of the box-model

### Web Safe Fonts and Font Stacks

`Websafe Fonts`

Web-safe fonts are fonts likely to be present on a wide range of computers, and used by Web content authors to increase the likelihood that content displays in their chosen font.


`font-size`

Font size refers to the size of the font from baseline to baseline when multiple lines of text are set solid in a multiline layout environment.

`font-family`

Specifies a prioritized list of one or more font family names and/or generic family names for the selected element.

`Georgia, 'Times New Roman', Times, serif;`

`Super Specifc, 'Fallback', serif / sans-serif;`

### Web Font Services free and paid

https://fonts.google.com/

https://www.fontsquirrel.com/

https://www.fontspring.com/

https://www.fonts.com/

https://www.typography.com/

https://www.fonts.com/
