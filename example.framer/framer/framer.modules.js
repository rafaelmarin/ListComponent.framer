require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"ListComponent":[function(require,module,exports){
var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.ListComponent = (function(superClass) {
  extend(ListComponent, superClass);

  function ListComponent(options) {
    if (options == null) {
      options = {};
    }
    this.updateContent = bind(this.updateContent, this);
    if (options.scrollHorizontal == null) {
      options.scrollHorizontal = false;
    }
    if (options.directionLock == null) {
      options.directionLock = true;
    }
    if (options.width == null) {
      options.width = Screen.width;
    }
    if (options.height == null) {
      options.height = Screen.height;
    }
    ListComponent.__super__.constructor.call(this, options);
    this._context.on("layer:destroy", (function(_this) {
      return function() {
        return _this.updateContent();
      };
    })(this));
    this.content.updateContent = (function(_this) {
      return function() {
        return _this.updateContent();
      };
    })(this);
  }

  ListComponent.prototype.updateContent = function() {
    var i, j, len, ref, sublayer;
    ref = this.content.subLayers;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      sublayer = ref[i];
      if (i === 0) {
        this.content.subLayers[0].y = 0;
      } else {
        this.content.subLayers[i].y = this._content.subLayers[i - 1].y + this._content.subLayers[i - 1].height;
      }
    }
    return ListComponent.__super__.updateContent.apply(this, arguments);
  };

  return ListComponent;

})(ScrollComponent);

exports.ListGroup = (function(superClass) {
  extend(ListGroup, superClass);

  function ListGroup(options) {
    if (options == null) {
      options = {};
    }
    this.updateContent = bind(this.updateContent, this);
    ListGroup.__super__.constructor.call(this, options);
    this.on("change:children", this.updateContent);
    this._context.on("layer:destroy", (function(_this) {
      return function() {
        return _this.updateContent();
      };
    })(this));
  }

  ListGroup.prototype.updateContent = function() {
    var i, j, len, ref, sublayer;
    this.height = 0;
    ref = this.subLayers;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      sublayer = ref[i];
      if (i === 0) {
        this.subLayers[0].y = 0;
        this.height += this.subLayers[0].height;
      } else {
        this.subLayers[i].y = this.subLayers[i - 1].maxY;
        this.height += this.subLayers[i].height;
      }
    }
    try {
      return this.parent.updateContent();
    } catch (undefined) {}
  };

  return ListGroup;

})(Layer);


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvcmFmYWVsL0Ryb3Bib3ggKFdvcmsgJiBDbykvRnJhbWVyL0xpc3RDb21wb25lbnQuZnJhbWVyL2V4YW1wbGUuZnJhbWVyL21vZHVsZXMvTGlzdENvbXBvbmVudC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFBOzs7O0FBQU0sT0FBTyxDQUFDOzs7RUFFQSx1QkFBQyxPQUFEOztNQUFDLFVBQVE7Ozs7TUFDckIsT0FBTyxDQUFDLG1CQUFvQjs7O01BQzVCLE9BQU8sQ0FBQyxnQkFBaUI7OztNQUN6QixPQUFPLENBQUMsUUFBUyxNQUFNLENBQUM7OztNQUN4QixPQUFPLENBQUMsU0FBVSxNQUFNLENBQUM7O0lBRXpCLCtDQUFNLE9BQU47SUFFQSxJQUFDLENBQUEsUUFBUSxDQUFDLEVBQVYsQ0FBYSxlQUFiLEVBQThCLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQTtlQUM3QixLQUFDLENBQUEsYUFBRCxDQUFBO01BRDZCO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUE5QjtJQUdBLElBQUMsQ0FBQSxPQUFPLENBQUMsYUFBVCxHQUF5QixDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUE7ZUFDeEIsS0FBQyxDQUFBLGFBQUQsQ0FBQTtNQUR3QjtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUE7RUFYYjs7MEJBY2IsYUFBQSxHQUFlLFNBQUE7QUFDZCxRQUFBO0FBQUE7QUFBQSxTQUFBLDZDQUFBOztNQUNDLElBQUcsQ0FBQSxLQUFLLENBQVI7UUFDQyxJQUFDLENBQUEsT0FBTyxDQUFDLFNBQVUsQ0FBQSxDQUFBLENBQUUsQ0FBQyxDQUF0QixHQUEwQixFQUQzQjtPQUFBLE1BQUE7UUFHQyxJQUFDLENBQUEsT0FBTyxDQUFDLFNBQVUsQ0FBQSxDQUFBLENBQUUsQ0FBQyxDQUF0QixHQUEwQixJQUFDLENBQUEsUUFBUSxDQUFDLFNBQVUsQ0FBQSxDQUFBLEdBQUUsQ0FBRixDQUFJLENBQUMsQ0FBekIsR0FBNkIsSUFBQyxDQUFBLFFBQVEsQ0FBQyxTQUFVLENBQUEsQ0FBQSxHQUFFLENBQUYsQ0FBSSxDQUFDLE9BSGpGOztBQUREO1dBS0Esa0RBQUEsU0FBQTtFQU5jOzs7O0dBaEJvQjs7QUF5QjlCLE9BQU8sQ0FBQzs7O0VBQ0EsbUJBQUMsT0FBRDs7TUFBQyxVQUFROzs7SUFDckIsMkNBQU0sT0FBTjtJQUNBLElBQUMsQ0FBQSxFQUFELENBQUksaUJBQUosRUFBdUIsSUFBQyxDQUFBLGFBQXhCO0lBRUEsSUFBQyxDQUFBLFFBQVEsQ0FBQyxFQUFWLENBQWEsZUFBYixFQUE4QixDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUE7ZUFBRyxLQUFDLENBQUEsYUFBRCxDQUFBO01BQUg7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQTlCO0VBSlk7O3NCQU1iLGFBQUEsR0FBZSxTQUFBO0FBQ2QsUUFBQTtJQUFBLElBQUMsQ0FBQSxNQUFELEdBQVU7QUFDVjtBQUFBLFNBQUEsNkNBQUE7O01BQ0MsSUFBRyxDQUFBLEtBQUssQ0FBUjtRQUNDLElBQUMsQ0FBQSxTQUFVLENBQUEsQ0FBQSxDQUFFLENBQUMsQ0FBZCxHQUFrQjtRQUNsQixJQUFDLENBQUEsTUFBRCxJQUFXLElBQUMsQ0FBQSxTQUFVLENBQUEsQ0FBQSxDQUFFLENBQUMsT0FGMUI7T0FBQSxNQUFBO1FBSUMsSUFBQyxDQUFBLFNBQVUsQ0FBQSxDQUFBLENBQUUsQ0FBQyxDQUFkLEdBQWtCLElBQUMsQ0FBQSxTQUFVLENBQUEsQ0FBQSxHQUFFLENBQUYsQ0FBSSxDQUFDO1FBQ2xDLElBQUMsQ0FBQSxNQUFELElBQVcsSUFBQyxDQUFBLFNBQVUsQ0FBQSxDQUFBLENBQUUsQ0FBQyxPQUwxQjs7QUFERDtBQU9BO2FBQUksSUFBQyxDQUFBLE1BQU0sQ0FBQyxhQUFSLENBQUEsRUFBSjtLQUFBO0VBVGM7Ozs7R0FQZ0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgZXhwb3J0cy5MaXN0Q29tcG9uZW50IGV4dGVuZHMgU2Nyb2xsQ29tcG9uZW50XG5cblx0Y29uc3RydWN0b3I6IChvcHRpb25zPXt9KSAtPlxuXHRcdG9wdGlvbnMuc2Nyb2xsSG9yaXpvbnRhbCA/PSBmYWxzZVxuXHRcdG9wdGlvbnMuZGlyZWN0aW9uTG9jayA/PSB0cnVlXG5cdFx0b3B0aW9ucy53aWR0aCA/PSBTY3JlZW4ud2lkdGhcblx0XHRvcHRpb25zLmhlaWdodCA/PSBTY3JlZW4uaGVpZ2h0XG5cdFx0XG5cdFx0c3VwZXIgb3B0aW9uc1xuXHRcdFxuXHRcdEBfY29udGV4dC5vbiBcImxheWVyOmRlc3Ryb3lcIiwgPT5cblx0XHRcdEB1cGRhdGVDb250ZW50KClcblx0XHRcblx0XHRAY29udGVudC51cGRhdGVDb250ZW50ID0gPT5cblx0XHRcdEB1cGRhdGVDb250ZW50KClcblx0XHRcdFx0XG5cdHVwZGF0ZUNvbnRlbnQ6ID0+XG5cdFx0Zm9yIHN1YmxheWVyLGkgaW4gQGNvbnRlbnQuc3ViTGF5ZXJzXG5cdFx0XHRpZiBpID09IDBcblx0XHRcdFx0QGNvbnRlbnQuc3ViTGF5ZXJzWzBdLnkgPSAwXG5cdFx0XHRlbHNlXG5cdFx0XHRcdEBjb250ZW50LnN1YkxheWVyc1tpXS55ID0gQF9jb250ZW50LnN1YkxheWVyc1tpLTFdLnkgKyBAX2NvbnRlbnQuc3ViTGF5ZXJzW2ktMV0uaGVpZ2h0XG5cdFx0c3VwZXJcblxuXG5jbGFzcyBleHBvcnRzLkxpc3RHcm91cCBleHRlbmRzIExheWVyXG5cdGNvbnN0cnVjdG9yOiAob3B0aW9ucz17fSkgLT5cblx0XHRzdXBlciBvcHRpb25zXG5cdFx0QG9uIFwiY2hhbmdlOmNoaWxkcmVuXCIsIEB1cGRhdGVDb250ZW50XG5cdFx0XG5cdFx0QF9jb250ZXh0Lm9uIFwibGF5ZXI6ZGVzdHJveVwiLCA9PiBAdXBkYXRlQ29udGVudCgpXG5cblx0dXBkYXRlQ29udGVudDogPT5cblx0XHRAaGVpZ2h0ID0gMFxuXHRcdGZvciBzdWJsYXllcixpIGluIEBzdWJMYXllcnNcblx0XHRcdGlmIGkgPT0gMFxuXHRcdFx0XHRAc3ViTGF5ZXJzWzBdLnkgPSAwXG5cdFx0XHRcdEBoZWlnaHQgKz0gQHN1YkxheWVyc1swXS5oZWlnaHRcblx0XHRcdGVsc2Vcblx0XHRcdFx0QHN1YkxheWVyc1tpXS55ID0gQHN1YkxheWVyc1tpLTFdLm1heFlcblx0XHRcdFx0QGhlaWdodCArPSBAc3ViTGF5ZXJzW2ldLmhlaWdodFxuXHRcdHRyeSBAcGFyZW50LnVwZGF0ZUNvbnRlbnQoKSJdfQ==
