Framer.Info =
	title: "Shopping List"
	author: "Rafael Marin"
	twitter: "@rafaelmarin"
	description: "Shopping list using ListComponent and ListGroup, available at http://github.com/rafaelmarin/ListComponent.framer"


{ListComponent} = require "ListComponent"
{ListGroup} = require "ListComponent"

# creates the list
shoppingList = new ListComponent


# groups are sublayers in side the list component that group other layers. They help you subdivide your scrolling list without having to recalculate 

# First ListGroup

fruits = new ListGroup
shoppingList.content.addSubLayer fruits

fruitsTitle = new Layer
	parent: fruits
	html: "Fruits"
	width: Screen.width
	backgroundColor: "black"
	height: 100

for fruit in ["Apple", "Banana", "Orange"]
	f = new Layer
		parent: fruits
		width: Screen.width
		height: 150
		backgroundColor: Utils.randomColor()
		html: fruit
	f.onTap -> @destroy()
	

# Second ListGroup	

grains = new ListGroup
shoppingList.content.addSubLayer grains

grainsTitle = new Layer
	parent: grains
	html: "Grains"
	width: Screen.width
	backgroundColor: "black"
	height: 100


for grain in ["Rice", "Barley", "Wheat"]
	g = new Layer
		parent: grains
		width: Screen.width
		height: 150
		backgroundColor: Utils.randomColor()
		html: grain
	g.onTap -> @destroy()