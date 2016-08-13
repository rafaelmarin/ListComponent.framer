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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvcmFmYWVsL0Ryb3Bib3ggKFdvcmsgJiBDbykvRnJhbWVyL0xpc3RDb21wb25lbnQuZnJhbWVyL2V4YW1wbGUyLmZyYW1lci9tb2R1bGVzL0xpc3RDb21wb25lbnQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsSUFBQTs7OztBQUFNLE9BQU8sQ0FBQzs7O0VBRUEsdUJBQUMsT0FBRDs7TUFBQyxVQUFROzs7O01BQ3JCLE9BQU8sQ0FBQyxtQkFBb0I7OztNQUM1QixPQUFPLENBQUMsZ0JBQWlCOzs7TUFDekIsT0FBTyxDQUFDLFFBQVMsTUFBTSxDQUFDOzs7TUFDeEIsT0FBTyxDQUFDLFNBQVUsTUFBTSxDQUFDOztJQUV6QiwrQ0FBTSxPQUFOO0lBRUEsSUFBQyxDQUFBLFFBQVEsQ0FBQyxFQUFWLENBQWEsZUFBYixFQUE4QixDQUFBLFNBQUEsS0FBQTthQUFBLFNBQUE7ZUFDN0IsS0FBQyxDQUFBLGFBQUQsQ0FBQTtNQUQ2QjtJQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBOUI7SUFHQSxJQUFDLENBQUEsT0FBTyxDQUFDLGFBQVQsR0FBeUIsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFBO2VBQ3hCLEtBQUMsQ0FBQSxhQUFELENBQUE7TUFEd0I7SUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBO0VBWGI7OzBCQWNiLGFBQUEsR0FBZSxTQUFBO0FBQ2QsUUFBQTtBQUFBO0FBQUEsU0FBQSw2Q0FBQTs7TUFDQyxJQUFHLENBQUEsS0FBSyxDQUFSO1FBQ0MsSUFBQyxDQUFBLE9BQU8sQ0FBQyxTQUFVLENBQUEsQ0FBQSxDQUFFLENBQUMsQ0FBdEIsR0FBMEIsRUFEM0I7T0FBQSxNQUFBO1FBR0MsSUFBQyxDQUFBLE9BQU8sQ0FBQyxTQUFVLENBQUEsQ0FBQSxDQUFFLENBQUMsQ0FBdEIsR0FBMEIsSUFBQyxDQUFBLFFBQVEsQ0FBQyxTQUFVLENBQUEsQ0FBQSxHQUFFLENBQUYsQ0FBSSxDQUFDLENBQXpCLEdBQTZCLElBQUMsQ0FBQSxRQUFRLENBQUMsU0FBVSxDQUFBLENBQUEsR0FBRSxDQUFGLENBQUksQ0FBQyxPQUhqRjs7QUFERDtXQUtBLGtEQUFBLFNBQUE7RUFOYzs7OztHQWhCb0I7O0FBeUI5QixPQUFPLENBQUM7OztFQUNBLG1CQUFDLE9BQUQ7O01BQUMsVUFBUTs7O0lBQ3JCLDJDQUFNLE9BQU47SUFDQSxJQUFDLENBQUEsRUFBRCxDQUFJLGlCQUFKLEVBQXVCLElBQUMsQ0FBQSxhQUF4QjtJQUVBLElBQUMsQ0FBQSxRQUFRLENBQUMsRUFBVixDQUFhLGVBQWIsRUFBOEIsQ0FBQSxTQUFBLEtBQUE7YUFBQSxTQUFBO2VBQUcsS0FBQyxDQUFBLGFBQUQsQ0FBQTtNQUFIO0lBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUE5QjtFQUpZOztzQkFNYixhQUFBLEdBQWUsU0FBQTtBQUNkLFFBQUE7SUFBQSxJQUFDLENBQUEsTUFBRCxHQUFVO0FBQ1Y7QUFBQSxTQUFBLDZDQUFBOztNQUNDLElBQUcsQ0FBQSxLQUFLLENBQVI7UUFDQyxJQUFDLENBQUEsU0FBVSxDQUFBLENBQUEsQ0FBRSxDQUFDLENBQWQsR0FBa0I7UUFDbEIsSUFBQyxDQUFBLE1BQUQsSUFBVyxJQUFDLENBQUEsU0FBVSxDQUFBLENBQUEsQ0FBRSxDQUFDLE9BRjFCO09BQUEsTUFBQTtRQUlDLElBQUMsQ0FBQSxTQUFVLENBQUEsQ0FBQSxDQUFFLENBQUMsQ0FBZCxHQUFrQixJQUFDLENBQUEsU0FBVSxDQUFBLENBQUEsR0FBRSxDQUFGLENBQUksQ0FBQztRQUNsQyxJQUFDLENBQUEsTUFBRCxJQUFXLElBQUMsQ0FBQSxTQUFVLENBQUEsQ0FBQSxDQUFFLENBQUMsT0FMMUI7O0FBREQ7QUFPQTthQUFJLElBQUMsQ0FBQSxNQUFNLENBQUMsYUFBUixDQUFBLEVBQUo7S0FBQTtFQVRjOzs7O0dBUGdCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNsYXNzIGV4cG9ydHMuTGlzdENvbXBvbmVudCBleHRlbmRzIFNjcm9sbENvbXBvbmVudFxuXG5cdGNvbnN0cnVjdG9yOiAob3B0aW9ucz17fSkgLT5cblx0XHRvcHRpb25zLnNjcm9sbEhvcml6b250YWwgPz0gZmFsc2Vcblx0XHRvcHRpb25zLmRpcmVjdGlvbkxvY2sgPz0gdHJ1ZVxuXHRcdG9wdGlvbnMud2lkdGggPz0gU2NyZWVuLndpZHRoXG5cdFx0b3B0aW9ucy5oZWlnaHQgPz0gU2NyZWVuLmhlaWdodFxuXHRcdFxuXHRcdHN1cGVyIG9wdGlvbnNcblx0XHRcblx0XHRAX2NvbnRleHQub24gXCJsYXllcjpkZXN0cm95XCIsID0+XG5cdFx0XHRAdXBkYXRlQ29udGVudCgpXG5cdFx0XG5cdFx0QGNvbnRlbnQudXBkYXRlQ29udGVudCA9ID0+XG5cdFx0XHRAdXBkYXRlQ29udGVudCgpXG5cdFx0XHRcdFxuXHR1cGRhdGVDb250ZW50OiA9PlxuXHRcdGZvciBzdWJsYXllcixpIGluIEBjb250ZW50LnN1YkxheWVyc1xuXHRcdFx0aWYgaSA9PSAwXG5cdFx0XHRcdEBjb250ZW50LnN1YkxheWVyc1swXS55ID0gMFxuXHRcdFx0ZWxzZVxuXHRcdFx0XHRAY29udGVudC5zdWJMYXllcnNbaV0ueSA9IEBfY29udGVudC5zdWJMYXllcnNbaS0xXS55ICsgQF9jb250ZW50LnN1YkxheWVyc1tpLTFdLmhlaWdodFxuXHRcdHN1cGVyXG5cblxuY2xhc3MgZXhwb3J0cy5MaXN0R3JvdXAgZXh0ZW5kcyBMYXllclxuXHRjb25zdHJ1Y3RvcjogKG9wdGlvbnM9e30pIC0+XG5cdFx0c3VwZXIgb3B0aW9uc1xuXHRcdEBvbiBcImNoYW5nZTpjaGlsZHJlblwiLCBAdXBkYXRlQ29udGVudFxuXHRcdFxuXHRcdEBfY29udGV4dC5vbiBcImxheWVyOmRlc3Ryb3lcIiwgPT4gQHVwZGF0ZUNvbnRlbnQoKVxuXG5cdHVwZGF0ZUNvbnRlbnQ6ID0+XG5cdFx0QGhlaWdodCA9IDBcblx0XHRmb3Igc3VibGF5ZXIsaSBpbiBAc3ViTGF5ZXJzXG5cdFx0XHRpZiBpID09IDBcblx0XHRcdFx0QHN1YkxheWVyc1swXS55ID0gMFxuXHRcdFx0XHRAaGVpZ2h0ICs9IEBzdWJMYXllcnNbMF0uaGVpZ2h0XG5cdFx0XHRlbHNlXG5cdFx0XHRcdEBzdWJMYXllcnNbaV0ueSA9IEBzdWJMYXllcnNbaS0xXS5tYXhZXG5cdFx0XHRcdEBoZWlnaHQgKz0gQHN1YkxheWVyc1tpXS5oZWlnaHRcblx0XHR0cnkgQHBhcmVudC51cGRhdGVDb250ZW50KCkiXX0=
