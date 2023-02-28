//使用function.myCall(context)调用
Function.prototype.myCall = function (context = window) {
  if (context === null || context === undefined) {
    context = window;
  } else {
    context = Object(context);
  }
  const fn = Symbol("fn"); // 用 symbol 处理一下
  context[fn] = this;
  const args = [...arguments].slice(1);
  const res = context[fn](...args);
  delete context[fn];
  return res;
};