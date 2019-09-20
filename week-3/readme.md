
# Items Covered

---

## HTML Tags

### Layout Tags

* [Meta Tag List](https://htmlhead.dev/)

`<section>`

The `<section>` element represents a standalone section — which doesn't have a more specific semantic element to represent it — contained within an HTML document. The `section` tag can be used in stead of a div

### CSS Tags

`float: left | right | none`
`clear: both`;

[Clearfix](http://learnlayout.com/clearfix.html)

https://css-tricks.com/snippets/css/clear-fix/

https://stackoverflow.com/questions/8554043/what-is-a-clearfix

#### If you don't need to support IE9 or lower, you can use flexbox freely, and don't need to use floated layouts.

• Clearfix is a way for an element to automatically clear its child elements, so that you don't need to add additional markup. It's generally used in float layouts where elements are floated to be stacked horizontally.


#### Old School Grid

```
  One Column Width
  width: 100% / 12 = 8.33333333%
```



Color

```
  HEX, RGB, RGBA
```

#### Color Reference Sites

* [Color Lovers](https://www.colourlovers.com)
* [Adobe Color](https://color.adobe.com/create)
* [Flat UI Colors](https://flatuicolors.com/)
* [Material Design Colors](https://www.materialui.co/colors)

---

### Webfonts Pros / Cons

```
@font-face
```

The @font-face CSS at-rule specifies a custom font with which to display text; the font can be loaded from either a remote server or a locally-installed font on the user's own computer.

```
@font-face {
  font-family: "Open Sans";
  src: url("/fonts/OpenSans-Regular-webfont.woff") format("woff");
}
```

WOFF - [Web Open Font File](https://en.wikipedia.org/wiki/Web_Open_Font_Format)


#### Self Hosted (Font Squirrel, @font-face)

Pros | Cons
--- | ---
Free Font | Licensing can be confusing
Unlimited views on your the site | Has to uploaded to your server.
&nbsp; | Manual sometimes confusing setup.
&nbsp; | FOUT


#### Services (Google Fonts, Fonts.com, Adobe Fonts etc)

Pros | Cons
--- | ---
Easy Setup | Possible unwanted 3rd Party Tracking
No extra weight on your server (CDN) | Can be blocked by countries with firewalls
&nbsp; | Limited views depending on the license selected
&nbsp; | FOUT
