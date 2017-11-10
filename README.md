# Plug-in "read more" - js-readmoretext.js

This javascript/jquery plug-in was created for websites, what using hiding part of the text from users, but do not want hide this text from bots.

# Start

### Afetr text block you want to hide

You need to wrap your text by div with your ID. The text should be included --- SEPARATOR ---. Separator is any character set, different from others characters from your text 

``` html
<div id="YOUR_ID">
   visible text
   --- SEPARATOR ---
   hidden text
   </div>
<div class="read-more"><span>MORE</span><span>HDIE</span></div>
```

### Then use jquery and js-readmoretext.js 
``` html
<script src="jquery.js"></script>
<script src="jsreadmoretext.js"></script>
<script>
   $('.YOUR_CLASS').readmore()
</script>
```

### Plug-in "jsreadmoretext.js" have the following settings:
``` js
$('#YOUR_ID').readmore({
   thisClass:"",
   separator:"",
   hide:true,
   shadowDown:true,
   shadowDownClass:'show-down-shadow',
   setTime:400
})
```
```
thisClass       - class for div with buttons MORE and HIDE
separator       - text, what will be separate all text (in the above code is --- SEPARATOR ---)
hide            - if use "true", will be useing buttons MORE and HIDE
                  if use "false", will be using button MORE, and after click button HIDE, it will not visible
shadowDown      - using true/false and show the gradient in the visible block (by default gradient is from transparent to white)
shadowDownClass - if shadowDown option is false, then there is an opportunity to use own class (by default is 'show-down-shadow')
setTime         - animation speed
```

# Browser Support

| <img src="https://clipboardjs.com/assets/images/chrome.png" width="48px" height="48px" alt="Chrome logo"> | <img src="https://clipboardjs.com/assets/images/edge.png" width="48px" height="48px" alt="Edge logo"> | <img src="https://clipboardjs.com/assets/images/firefox.png" width="48px" height="48px" alt="Firefox logo"> | <img src="https://clipboardjs.com/assets/images/ie.png" width="48px" height="48px" alt="Internet Explorer logo"> | <img src="https://clipboardjs.com/assets/images/opera.png" width="48px" height="48px" alt="Opera logo"> | <img src="https://clipboardjs.com/assets/images/safari.png" width="48px" height="48px" alt="Safari logo"> |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 42+ ✔ | 12+ ✔ | 41+ ✔ | 9+ ✔ | 29+ ✔ | 10+ ✔ |
