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

    css: function(prop, value) {
        return this.each(function(e) {
            e.style.setProperty(prop, value, null);
        });
    },

    attr: function(key, value) {
        return this.each(function(e) {
            e.setAttribute(key, value);
        });
    },

    on: function(type, callback) {
        return this.each(function(e) {
            e.addEventListener(type, callback);
        });
    }

};
