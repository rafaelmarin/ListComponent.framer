# ListComponent.framer
ListComponent is a [Framer](http://github.com/koenbok/Framer) component that helps you easily stack list items inside a [ScrollComponent](http://framerjs.com/docs/#scroll.scrollcomponent). It extends ```ScrollComponent``` and ```ScrollComponent.updateContent()``` methods to render its sublayers in a stack, so everytime a sublayer is added or removed, it will re-render the entire list.

## How to install
As with any other module, just drag the file to your Framer project's ```modules/``` folder, then import the module in your Framer prototype by adding ```{ListComponent} = require "ListComponent"``` to your source code.

## Example
[Shopping List](http://share.framerjs.com/48ksc53cmq7i/)

## Basic usage
Create and setup a ListComponent like you would a ScrollComponent, then just add and remove sublayers to see it working.

```
{ListComponent} = require "ListComponent"

myList = new ListComponent

listItem1 = new Layer
  width: Screen.width
  height: 200
  backgroundColor: Utils.randomColor()
  html: "Item 1"

listItem2 = new Layer
  width: Screen.width
  height: 200
  backgroundColor: Utils.randomColor()
  html: "Item 2"

listItem3 = new Layer
  width: Screen.width
  height: 200
  backgroundColor: Utils.randomColor()
  html: "Item 3"
  
listItem1.onTap -> @destroy()
listItem2.onTap -> @destroy()
listItem3.onTap -> @destroy()

myList.content.addSubLayer listItem1
myList.content.addSubLayer listItem2
myList.content.addSubLayer listItem3

```

## ListGroup
Sometimes you'll want to divide your list of items into subgroups, and that's what ListGroups are. They are basically Framer Layers that will also resize according to the the lenght of their children. Here's the source code forfor the [Shopping List](http://share.framerjs.com/48ksc53cmq7i/) example: 

```
{ListComponent} = require "ListComponent"
{ListGroup} = require "ListComponent"

# creates the list
shoppingList = new ListComponent


# groups are sublayers in side the list component that group other layers. They help you subdivide your scrolling list without having to recalculate 

# First ListGroup

fruits = new ListGroup
	parent: shoppingList.content

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
	parent: shoppingList.content

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
```
