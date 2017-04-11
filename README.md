## jllustrator: work with Adobe Illustrator SVG with ease





### Quick start

After included the library just add in your HTML document:

```html
<div jllustrator="myArtwork.svg"></div>
```

to inject an SVG file into your HTML file alongside some fix and enhancements

To perform some operation after the async nature of the loading process, use the jQuery.ready function as usual:

```javascript
$(document).ready(function(){
  console.log('my svg has been loaded')
  $('svg').on('click', function(){
    console.log('Click from SVG')
  })
})
```



### What jllustrator is going to fix on the loaded SVG?



---

### Dependencies

jQuery 3.x.x

### Install from CDN

Just drop the following lines into the HEAD of the HTML file:

```html
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
```



### Install locally with npm

```
npm install jllustrator
```



### Load an SVG at runtime

```html
<div jllustrator="ball.svg"></div>
```

---

## Layer naming conventions

- Don't start with a number in layer name
- Don't use ```_``` in layer name
- You can use ```[SPACE]``` and it will be changed as ```_```
- Layer name are global, so using same name on different layer will cause an automatic changes
- Text element contains already a name that is equal to the text content. It is a preview and not a regular name therefore change it using a different name (otherwise Illustrator won't change it)

---

## Save Options

Show ```more Options``` in SVG export panel

- Save as SVG 1.1
- Set ```Output fewer <tspan> elements``` to true
- Images Location: use ```Link```
- Type: ```Convert to Outline``` (see below for alternatives)
- Fonts: ```None (Use System Fonts)```
- CSS Properties: ```Presentation Attributes```
- Preserve Illustrator Edit capabilities **checked**

---

## Artboard 

- Use ```pixel``` as unit
- Use RGB color space 
- The size of the artboard will become the viewport of the prototype

---


​    
## Font options

- You can use fonts installed on your computer but they will work only on your computer.
- Alternatively you can convert all text as outline in the SVG part only, a little bit heavier and text cannot be changed in runtime, **best solution for portability.**
- You can use GoogleFont, both on your local computer and on remote files as well, a bit tricky but feaseable.
- You can use FontSquirrel and the Font-face declaration


---

## Text alignment for dynamic text labels

Name it as you wish appending at the end:

    ' j|center'
    ' j|right'

Space are important.
Otherwise it's possible to performe the same manually with:

    $('#mytextid').textAlign('center')

or

    $('#mytextid').textAlign('right')


---

## Images

- Can be linked (best option but you need to relink them from within AI if you move the file somewhere)
- Can be embed but pollute the svg code, not a good solution, hard to read






---

## Adding class name

Classes are very useful on group selection or with CSS style. You cannot assign class name to elements in Adobe Illustrator.  

jllustrator comes with a neat function that convert special layer name notation into class name in the SVG.

A layer with the name

```myObject .class1 .class2```

will become:

```<g id="myObject" class="class1 class2"></g>```

Use with responsibility

---

## Supported features are:

- gradients
- transparency
- compound shapes
- masks

---

## Don't use these native AI features 

(emulate with external image if you can't live without)

- Mesh
- Effects
- Filters
- Patterns

