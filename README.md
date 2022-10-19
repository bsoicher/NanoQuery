NanoQuery
=========
Minimalist DOM manipulation library with a jQuery like syntax. Covers a few basic but usefull functions in a tiny package (0.476 KB minified).  Not meant to be a full framework, just a basic set of tools for small web projects.

Example:
```
$("div").on("click", function(){
  $(this).css("color", "red").attr("class", "red");
  console.log("New color is:" + $(this).css("color"));
});
```

Was more of a learning excercise for chainable methods and such.  Could be extended easily, but for anything serious I'd recommend going with [JQuery](https://github.com/jquery/jquery) or [Zepto](https://github.com/madrobby/zepto).
