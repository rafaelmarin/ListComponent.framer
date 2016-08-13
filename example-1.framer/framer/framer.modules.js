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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvcmFmYWVsL0Ryb3Bib3ggKFdvcmsgJiBDbykvRnJhbWVyL0xpc3RDb21wb25lbnQuZnJhbWVyL2V4YW1wbGUtMS5mcmFtZXIvbW9kdWxlcy9MaXN0Q29tcG9uZW50LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUE7Ozs7QUFBTSxPQUFPLENBQUM7OztFQUVBLHVCQUFDLE9BQUQ7O01BQUMsVUFBUTs7OztNQUNyQixPQUFPLENBQUMsbUJBQW9COzs7TUFDNUIsT0FBTyxDQUFDLGdCQUFpQjs7O01BQ3pCLE9BQU8sQ0FBQyxRQUFTLE1BQU0sQ0FBQzs7O01BQ3hCLE9BQU8sQ0FBQyxTQUFVLE1BQU0sQ0FBQzs7SUFFekIsK0NBQU0sT0FBTjtJQUVBLElBQUMsQ0FBQSxRQUFRLENBQUMsRUFBVixDQUFhLGVBQWIsRUFBOEIsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFBO2VBQzdCLEtBQUMsQ0FBQSxhQUFELENBQUE7TUFENkI7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQTlCO0lBR0EsSUFBQyxDQUFBLE9BQU8sQ0FBQyxhQUFULEdBQXlCLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQTtlQUN4QixLQUFDLENBQUEsYUFBRCxDQUFBO01BRHdCO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQTtFQVhiOzswQkFjYixhQUFBLEdBQWUsU0FBQTtBQUNkLFFBQUE7QUFBQTtBQUFBLFNBQUEsNkNBQUE7O01BQ0MsSUFBRyxDQUFBLEtBQUssQ0FBUjtRQUNDLElBQUMsQ0FBQSxPQUFPLENBQUMsU0FBVSxDQUFBLENBQUEsQ0FBRSxDQUFDLENBQXRCLEdBQTBCLEVBRDNCO09BQUEsTUFBQTtRQUdDLElBQUMsQ0FBQSxPQUFPLENBQUMsU0FBVSxDQUFBLENBQUEsQ0FBRSxDQUFDLENBQXRCLEdBQTBCLElBQUMsQ0FBQSxRQUFRLENBQUMsU0FBVSxDQUFBLENBQUEsR0FBRSxDQUFGLENBQUksQ0FBQyxDQUF6QixHQUE2QixJQUFDLENBQUEsUUFBUSxDQUFDLFNBQVUsQ0FBQSxDQUFBLEdBQUUsQ0FBRixDQUFJLENBQUMsT0FIakY7O0FBREQ7V0FLQSxrREFBQSxTQUFBO0VBTmM7Ozs7R0FoQm9COztBQXlCOUIsT0FBTyxDQUFDOzs7RUFDQSxtQkFBQyxPQUFEOztNQUFDLFVBQVE7OztJQUNyQiwyQ0FBTSxPQUFOO0lBQ0EsSUFBQyxDQUFBLEVBQUQsQ0FBSSxpQkFBSixFQUF1QixJQUFDLENBQUEsYUFBeEI7SUFFQSxJQUFDLENBQUEsUUFBUSxDQUFDLEVBQVYsQ0FBYSxlQUFiLEVBQThCLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQTtlQUFHLEtBQUMsQ0FBQSxhQUFELENBQUE7TUFBSDtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBOUI7RUFKWTs7c0JBTWIsYUFBQSxHQUFlLFNBQUE7QUFDZCxRQUFBO0lBQUEsSUFBQyxDQUFBLE1BQUQsR0FBVTtBQUNWO0FBQUEsU0FBQSw2Q0FBQTs7TUFDQyxJQUFHLENBQUEsS0FBSyxDQUFSO1FBQ0MsSUFBQyxDQUFBLFNBQVUsQ0FBQSxDQUFBLENBQUUsQ0FBQyxDQUFkLEdBQWtCO1FBQ2xCLElBQUMsQ0FBQSxNQUFELElBQVcsSUFBQyxDQUFBLFNBQVUsQ0FBQSxDQUFBLENBQUUsQ0FBQyxPQUYxQjtPQUFBLE1BQUE7UUFJQyxJQUFDLENBQUEsU0FBVSxDQUFBLENBQUEsQ0FBRSxDQUFDLENBQWQsR0FBa0IsSUFBQyxDQUFBLFNBQVUsQ0FBQSxDQUFBLEdBQUUsQ0FBRixDQUFJLENBQUM7UUFDbEMsSUFBQyxDQUFBLE1BQUQsSUFBVyxJQUFDLENBQUEsU0FBVSxDQUFBLENBQUEsQ0FBRSxDQUFDLE9BTDFCOztBQUREO0FBT0E7YUFBSSxJQUFDLENBQUEsTUFBTSxDQUFDLGFBQVIsQ0FBQSxFQUFKO0tBQUE7RUFUYzs7OztHQVBnQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjbGFzcyBleHBvcnRzLkxpc3RDb21wb25lbnQgZXh0ZW5kcyBTY3JvbGxDb21wb25lbnRcblxuXHRjb25zdHJ1Y3RvcjogKG9wdGlvbnM9e30pIC0+XG5cdFx0b3B0aW9ucy5zY3JvbGxIb3Jpem9udGFsID89IGZhbHNlXG5cdFx0b3B0aW9ucy5kaXJlY3Rpb25Mb2NrID89IHRydWVcblx0XHRvcHRpb25zLndpZHRoID89IFNjcmVlbi53aWR0aFxuXHRcdG9wdGlvbnMuaGVpZ2h0ID89IFNjcmVlbi5oZWlnaHRcblx0XHRcblx0XHRzdXBlciBvcHRpb25zXG5cdFx0XG5cdFx0QF9jb250ZXh0Lm9uIFwibGF5ZXI6ZGVzdHJveVwiLCA9PlxuXHRcdFx0QHVwZGF0ZUNvbnRlbnQoKVxuXHRcdFxuXHRcdEBjb250ZW50LnVwZGF0ZUNvbnRlbnQgPSA9PlxuXHRcdFx0QHVwZGF0ZUNvbnRlbnQoKVxuXHRcdFx0XHRcblx0dXBkYXRlQ29udGVudDogPT5cblx0XHRmb3Igc3VibGF5ZXIsaSBpbiBAY29udGVudC5zdWJMYXllcnNcblx0XHRcdGlmIGkgPT0gMFxuXHRcdFx0XHRAY29udGVudC5zdWJMYXllcnNbMF0ueSA9IDBcblx0XHRcdGVsc2Vcblx0XHRcdFx0QGNvbnRlbnQuc3ViTGF5ZXJzW2ldLnkgPSBAX2NvbnRlbnQuc3ViTGF5ZXJzW2ktMV0ueSArIEBfY29udGVudC5zdWJMYXllcnNbaS0xXS5oZWlnaHRcblx0XHRzdXBlclxuXG5cbmNsYXNzIGV4cG9ydHMuTGlzdEdyb3VwIGV4dGVuZHMgTGF5ZXJcblx0Y29uc3RydWN0b3I6IChvcHRpb25zPXt9KSAtPlxuXHRcdHN1cGVyIG9wdGlvbnNcblx0XHRAb24gXCJjaGFuZ2U6Y2hpbGRyZW5cIiwgQHVwZGF0ZUNvbnRlbnRcblx0XHRcblx0XHRAX2NvbnRleHQub24gXCJsYXllcjpkZXN0cm95XCIsID0+IEB1cGRhdGVDb250ZW50KClcblxuXHR1cGRhdGVDb250ZW50OiA9PlxuXHRcdEBoZWlnaHQgPSAwXG5cdFx0Zm9yIHN1YmxheWVyLGkgaW4gQHN1YkxheWVyc1xuXHRcdFx0aWYgaSA9PSAwXG5cdFx0XHRcdEBzdWJMYXllcnNbMF0ueSA9IDBcblx0XHRcdFx0QGhlaWdodCArPSBAc3ViTGF5ZXJzWzBdLmhlaWdodFxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRAc3ViTGF5ZXJzW2ldLnkgPSBAc3ViTGF5ZXJzW2ktMV0ubWF4WVxuXHRcdFx0XHRAaGVpZ2h0ICs9IEBzdWJMYXllcnNbaV0uaGVpZ2h0XG5cdFx0dHJ5IEBwYXJlbnQudXBkYXRlQ29udGVudCgpIl19
