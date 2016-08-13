{ListComponent} = require "ListComponent"

myList = new ListComponent

for i in [0..10]
	item = new Layer
	  width: Screen.width
	  height: 200
	  backgroundColor: Utils.randomColor()
	  html: "Item #{i}"
	  parent: myList.content
	item.onTap -> @destroy()