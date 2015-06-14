function $(selector) {
    return (this instanceof $) ? this.find(selector) : new $(selector);
}

$.prototype = {
    
    find: function(selector) {
        this.a = selector && selector.nodeType ? [selector] : [].slice.call(document.querySelectorAll(selector));
        return this;
    },

    each: function(func) {
        for (var i = this.a.length; i--;)
            func(this.a[i]);
        return this;
    },

    css: function(prop, value) {
        return value ? this.each(function(e) {
            e.style[prop] = value;
        }) : this.a[0].style[prop];
    },

    attr: function(key, value) {
        return value ? this.each(function(e) {
            e.setAttribute(key, value);
        }) : this.a[0].getAttribute(key);
    },

    on: function(type, callback) {
        return this.each(function(e) {
            e.addEventListener(type, callback);
        });
    }

};
