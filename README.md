### jsreadmoretext.js

This script was created for websites, what use hiding part of the text from users, but do not want hide this text from bots.

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
   first text
   --- SEPARATOR ---
   second text
   </div>
<div class="read-more"><span>READMORE</span><span>HDIE</span></div>
```

Then use jquery and jsreadmoretext.js 
``` html
<script src="jquery.js"></script>
<script src="jsreadmoretext.js"></script>
<script>
   $('.YOUR_CLASS').readmore()
</script>
```
