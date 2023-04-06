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
/*remember to place this script right down below <body> tag,   
then DOM elements in <body> will be rendered and readable*/
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
if (reg.test(string)) { /*...*/ } 
else { /*...*/ }
```

#### Object

```js
//iteration
for (key in object) { /*...*/ }
const keys = Object.keys(object);
//	  keys = Object.getOwnPropertyNames(object);
for (key in keys) { /*object[key]*/ }     

let obj = {
    "juice": 999, 
    "wrld": "forever"
};
/*thus you will get the object 'copy' 
that don't refer to the object 'obj'*/
let copy = { ...obj }
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
});//expecting output: [4, 5]
let index = arr.findIndex((val, index) => {
    return val > 3;
});//expecting output:[3, 4]
```

#### Promise

```javascript
let promise = new Promise((resolve, reject) => {
	try {
        let res = []; 
		resolve(res);
        /*get the result and resolve them*/
	} catch (err) {
		reject(err);
        /*get the error and reject it*/
	}
}).then (
    (res) => {
        /*res-related statements*/
    },
    (err) => {
        /*err-related statements*/
    }
)

//Promise.all & Promise.race
Promise.all([p1, p2]).then(
    (res) => {
        /*res is a array that contains 
        all the results from p1, p2 and so on*/
    },
	(err) => {
        /*err is a array that contains 
        all the errors from p1, p2 and so on*/
    }
);

```

#### async & await

```javascript
function wating() {
    return new Promise((resolve, reject) => {
        try {
            let res = []; 
            resolve(res);
        } catch (err) {
            reject(err);
        }
    })
}

async function opt() {
    /*even if you didn't return a Promise object,
    this function will automatically and implicitly 
    resolve the result in a Promise object*/
    const val = await wating();
    return val;
}
opt.then((res) => {
	/*...*/
}).catch((err) => {
 	/*...*/
});

```

#### AJAX & axios

```javascript
//original AJAX
function ajax(arguments){ 
  let ajaxData = { 
    url: arguments.url || "", 
    type: arguments.type || "GET", 
    async: arguments.async || "true",
    dataType: arguments.dataType || "json",
    data: JSON.stringify(arguments.data) || null, 
    contentType: arguments.contentType || "application/json", 
    beforeSend: arguments.beforeSend || () => {}, 
    success: arguments.success || () => {}, 
    error: arguments.error || () => {} 
  } 
  ajaxData.beforeSend() 
  let xhr = XMLHttpRequest();  
  xhr.responseType = ajaxData.dataType; 
  xhr.open(ajaxData.type, ajaxData.url, ajaxData.async);  
  xhr.setRequestHeader("Content-Type", ajaxData.contentType);  
  xhr.send(ajaxData.data);  
  xhr.onreadystatechange = function() {  
    if (xhr.readyState == 4) {  
      if (xhr.status == 200){ 
        ajaxData.success(xhr.response);
      } else { 
        ajaxData.error();
      }  
    } 
  }  
} 

//Promise AJAX
const getJSON = function(url) {
    const promise = new Promise((resolve, reject) => {
        const handler = () => {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onreadystatechange = handler;
        xhr.responseType = "json";
        xhr.setRequestHeader(
            "Content-Type", "application/json"
        );
        xhr.send();

    });
    return promise;
};
getJSON(".json").then(
    (json) => {}, 
    (error) => {}
);

//axios
axios({
    url："",
	method："get" || "post",
	headers："",
	params：{
    	/*when method is GET, 
    	it's for setting the params in url*/
	},
	data: {}
}).then((res) => {
	/*...*/
}).catch((err) => {
 	/*...*/
});
```

