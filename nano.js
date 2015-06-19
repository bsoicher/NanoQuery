// Creates new instance and takes in a selector or element object
function $(selector) {
    if (this instanceof $){
        this.a = selector && selector.nodeType ? [selector] : [].slice.call(document.querySelectorAll(selector));
        return this;
    }
    return new $(selector);
}

$.prototype = {
    
    // Itterate through array.  Could be done using [].forEach, but this should perform better
    each: function(func) {
        for (var i = this.a.length; i--;)
            func(this.a[i]);
        return this;
    },

    // Get/Set inline style value
    css: function(prop, value) {
        return value ? this.each(function(e) {
            e.style[prop] = value;
        }) : this.a[0].style[prop];
    },
    
    // Get/Set attribute value
    attr: function(key, value) {
        return value ? this.each(function(e) {
            e.setAttribute(key, value);
        }) : this.a[0].getAttribute(key);
    },

    // Add event listeners
    on: function(type, callback) {
        return this.each(function(e) {
            e.addEventListener(type, callback);
        });
    }

};
