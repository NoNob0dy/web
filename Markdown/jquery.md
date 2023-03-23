#### class-like index selector

```js
$('E:odd || even')
$('E:lt(n) || eq(n) || ge(n)')
```

#### event

```javascript
$('FE').on("event", 'CE', () => {})
//FE is a father element, while CE is FE's children elements
$('E').trigger("event", () = {})
//if you customized a event, use trigger method to active it
```

#### element

```javascript
//basic
let elem = $('<input>');
elem.attr({
    "id": "name",
    "type": "text",
    "class": "age"
});
$('E').after(elem);
elem.val("den21s");
elem.addClass("name");
elem.removeClass("age");
elem.toggleClass("input");
elem.css("font-weight", 21);
//animation
function animation() {
    $('E').animate({ /*css*/ }, speed, animation);
    //animate didn't support transform attriubte
}
//using recursive function to make animation infinite
//iteration
$('E').each((index, elem) => {})
```

#### AJAX

```javascript
$.ajax({  
    url:  //<String>
    type: //<String>
    data: //<Object/String>
    dataType: //<String>
    beforeSend: //<function>
    success: //<function>
    error: //<function>
    complete: //<function>
    contentType: //<String>
    async: //<boolean> 
})
$.lode(url, data, (rsp) => {})
$.get(url, data, (rsp) => {}, dataType)
$.post(url, data, (rsp) => {}, dataType)
$.getJSON(url, data, (json) => {})
$.getScript(url, (script) => {})
```

