# Items Covered
---

## :focus

The :focus CSS pseudo-class represents an element (such as a form input) that has received focus. It is generally triggered when the user clicks or taps on an element or selects it with the keyboard's "tab" key.

```
input:focus {
  color: red;
  border: 1px solid blue;
}
```

## textarea

The HTML <textarea> element represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example a comment on a review or feedback form.

```
<textarea name="story" cols="33"></textarea>
```

The `rows` and `cols` attributes allow you to specify an exact size for the `<textarea>` to take. Setting these is a good idea for consistency, as browser defaults can differ.

If you want default content for your `<textarea>`, you enter it between the opening and closing tags. `<textarea>` does not support the value attribute.


## href="mailto:"

It is possible to create links or buttons that, when clicked, open a new outgoing email message rather than linking to a resource or page. This is done using the <a> element and the `mailto:` URL scheme.

In its most basic and commonly used form, a `mailto:` link simply indicates the email address of the intended recipient.

```
  <a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

## JavaScript

TL;DR - https://developer.mozilla.org/en-US/docs/Web/JavaScript