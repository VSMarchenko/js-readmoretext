### jsreadmoretext.js

This javascript/jqueri plug-in was created for websites, what use hiding part of the text from users, but do not want hide this text from bots.

### Browser Support

  * IE 6+
  * Opera 10+
  * Safari 3+
  * Chrome 1+
  * Firefox 2+

### Start

Afetr text block you want to hide, add this html code:
``` html
<div class="YOUR_CLASS">
   visible text
   --- SEPARATOR ---
   hidden text
   </div>
<div class="read-more"><span>MORE</span><span>HDIE</span></div>
```

Then use jquery and jsreadmoretext.js 
``` html
<script src="jquery.js"></script>
<script src="jsreadmoretext.js"></script>
<script>
   $('.YOUR_CLASS').readmore()
</script>
```

Plug-in "jsreadmoretext.js" have the following settings:
``` js
   thisClass:"",
   separator:"",
   hide:true,
   shadowDown:true,
   shadowDownClass:'show-down-shadow',
   setTime:400
```
thisClass - class for div with buttons MORE and HIDE
