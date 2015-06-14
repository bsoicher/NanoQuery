function $(selector) {
    if (this instanceof $){
        this.a = selector && selector.nodeType ? [selector] : [].slice.call(document.querySelectorAll(selector));
        return this;
    }
    return new $(selector);
}

$.prototype = {
    
    each: function(func) {
        for (var i = this.a.length; i--;)
            func(this.a[i]);
        return this;
    },

    css: function(name, value) {
        return value ? this.each(function(e) {
            e.style[name] = value;
        }) : this.a[0].style[name];
    },

    attr: function(name, value) {
        return value ? this.each(function(e) {
            e.setAttribute(name, value);
        }) : this.a[0].getAttribute(name);
    },

    on: function(name, func) {
        return this.each(function(e) {
            e.addEventListener(name, func);
        });
    }

};
