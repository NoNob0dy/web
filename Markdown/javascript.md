#### storage

```javascript
localStorage.UserId = "1";
localStorage.setItem("local", `i'm den21s`);
const local = localStorage.getItem("local");
//local.equals(`i'm den21s`);

sessionStorage.ShopNumber = "2"
//rest of the usages are the same as localStorage
```

#### DOM

```js
/*
	remember to place this script right down below <body> tag,     then DOM elements in <body> will be rendered and readable 
*/
var node = document.createElement("div"),
    text = document.createTextNode("I'm div"),
    attr = document.createAttribute("identify"),
    parent = document.getElementById("parent");
attr.value = "isDiv";
node.appendChild(text);
node.setAttributeNode(attr);
node.setAttribute("id", 'child');
node.onclick = () => {
    alert("I'm div child");
    node.innerHTML = "I'm div child";
};
parent.appendChild(node);
```

#### RegExp

```js
const reg = new RegExp(//);
var string = "I'm going to be tested";
if (reg.test(string)) { //... } 
else { //... }
```

#### Object

```js
//遍历
for (key in object) { //... }

const keys = Object.keys(object);
    	   //Object.getOwnPropertyNames(object);
for (key in keys) { //object[key] }     
```

