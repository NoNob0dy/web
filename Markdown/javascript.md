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

#### Reg-Exp

```js
const reg = new RegExp(//);
var string = "I'm going to be tested";
if (reg.test(string)) { /*...*/ } 
else { /*...*/ }
```

#### Object

```js
//遍历
for (key in object) { /*...*/ }
const keys = Object.keys(object);
//	  keys = Object.getOwnPropertyNames(object);
for (key in keys) { /*object[key]*/ }     

let obj;
//set
obj = new Set([0]);
obj.add(999);
if (obj.has(999)) {
    obj.forEach((val, index) => {
        obj.delete(val);
		/*...*/
	})
}
obj.clear();
//map
obj = new Map (
    ["juice", 999], 
    ["wrld", "forever"]
);
obj.set("den21s", "love");
if (obj.get("den21s").equals("love")) {
    obj.forEach((val, key) => {
		/*...*/
    })
}
obj.clear()
```

#### ES6 Array

```javascript
//initialize
let arr = Array.of(5, 4, 3, 2, 1);
//	arr = Array.from({length: 5}, (v, k) => (5 - k))

//sort
arr.sort((x, y) => {
    if (x < y) {
      return -1;
    } else if (x == y) {
      return 0;
    } else {
      return 1;
    }
});

//findIndex & find
let val = arr.find((val, index) => {
    return val > 3;
});
let index = arr.findIndex((val, index) => {
    return val > 3;
});
```

