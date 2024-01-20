---
id: 2
title: My third post
description: This is my third blog, tried to used some html and markdown
image: example3.png
author: pepe@example.co
date: 01/19/2024
---

# Editor.md

![](https://pandao.github.io/editor.md/images/logos/editormd-logo-180x180.png)

![](https://img.shields.io/github/stars/pandao/editor.md.svg) ![](https://img.shields.io/github/forks/pandao/editor.md.svg) ![](https://img.shields.io/github/tag/pandao/editor.md.svg) ![](https://img.shields.io/github/release/pandao/editor.md.svg) ![](https://img.shields.io/github/issues/pandao/editor.md.svg) ![](https://img.shields.io/bower/v/editor.md.svg)

**Table of Contents**

# H1 header

## H2 header

### H3 header

#### H4 header

##### H5 header

###### H6 header

# Heading 1 link [Heading link](https://github.com/jaimediaz96/uceva.iot "Heading link")

## Heading 2 link [Heading link](https://github.com/jaimediaz96/uceva.iot "Heading link")

### Heading 3 link [Heading link](https://github.com/jaimediaz96/uceva.iot "Heading link")

#### Heading 4 link [Heading link](https://github.com/jaimediaz96/uceva.iot "Heading link")

##### Heading 5 link [Heading link](https://github.com/jaimediaz96/uceva.iot "Heading link")

###### Heading 6 link [Heading link](https://github.com/jaimediaz96/uceva.iot "Heading link")

Heading link [Heading link](https://github.com/jaimediaz96/uceva.iot "Heading link")

### Characters

---

_Italic_ _Italic_
**Emphasis** **Emphasis**
**_Emphasis Italic_** **_Emphasis Italic_**

### Blockquotes

> Blockquotes

Paragraphs and Line Breaks

> "Blockquotes Blockquotes", [Link](http://localhost/)。

### Links

[Links](http://localhost/)

[Links with title](http://localhost/ "link title")

`<link>` : <https://github.com>

[Reference link][id/name]

[id/name]: https://www.google.com/

### Code Blocks (multi-language) & highlighting

#### Inline code

`$ npm install marked`

#### Code Blocks (Indented style)

Indented 4 spaces, like `<pre>` (Preformatted Text).

    <?php
        echo "Hello world!";
    ?>

Code Blocks (Preformatted text):

    | First Header  | Second Header |
    | ------------- | ------------- |
    | Content Cell  | Content Cell  |
    | Content Cell  | Content Cell  |

#### Javascript

```javascript
function test() {
  console.log("Hello world!");
}

(function () {
  var box = function () {
    return box.fn.init();
  };

  box.prototype = box.fn = {
    init: function () {
      console.log("box.init()");

      return this;
    },

    add: function (str) {
      alert("add", str);

      return this;
    },

    remove: function (str) {
      alert("remove", str);

      return this;
    },
  };

  box.fn.init.prototype = box.fn;

  window.box = box;
})();

var testBox = box();
testBox.add("jQuery").remove("jQuery");
```

#### HTML code

```html
<!DOCTYPE html>
<html>
  <head>
    <mate charest="utf-8" />
    <title>Hello world!</title>
  </head>
  <body>
    <h1>Hello world!</h1>
  </body>
</html>
```

### Images

Image:

![](https://pandao.github.io/editor.md/examples/images/4.jpg)

> Follow your heart.

![](https://pandao.github.io/editor.md/examples/images/8.jpg)

> 图为：厦门白城沙滩 Xiamen

图片加链接 (Image + Link)：

[![](https://pandao.github.io/editor.md/examples/images/7.jpg)](https://pandao.github.io/editor.md/examples/images/7.jpg "李健首张专辑《似水流年》封面")

> 图为：李健首张专辑《似水流年》封面

---

### Lists

#### Unordered list (-)

- Item A
- Item B
- Item C

#### Unordered list (plus sign and nested)

- Item A
- Item B
  - Item B 1
  - Item B 2
  - Item B 3
- Item C
  - Item C 1
  - Item C 2
  - Item C 3

#### Ordered list

1. Item A
2. Item B
3. Item C

---

#### HTML entities

&copy; & &uml; &trade; &iexcl; &pound;
&amp; &lt; &gt; &yen; &euro; &reg; &plusmn; &para; &sect; &brvbar; &macr; &laquo; &middot;

X&sup2; Y&sup3; &frac34; &frac14; &times; &divide; &raquo;

18&ordm;C &quot; &apos;

## Escaping for Special Characters

\*literal asterisks\*

### End
