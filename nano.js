function $(selector) {
    return (this instanceof $) ? this.find(selector) : new $(selector);
}

$.prototype = {
    
    find: function(selector) {
        this.a = [].slice.call(document.querySelectorAll(selector));
        return this;
    },

    each: function(func) {
        for (var i = this.a.length; i--;) {
            func(this.a[i]);
        }
        return this;
    },

    css: function(name, value) {
        return this.each(function(e) {
            e.style.setProperty(name, value, null);
        });
    },

    attr: function(name, value) {
        return this.each(function(e) {
            e.setAttribute(name, value);
        });
    },

    on: function(name, func) {
        return this.each(function(e) {
            e.addEventListener(name, func);
        });
    }

};
