# ListComponent.framer
ListComponent is a [Framer](http://github.com/koenbok/Framer) component that helps you easily stack list items inside a [ScrollComponent](http://framerjs.com/docs/#scroll.scrollcomponent).

# How to install
As with any other module, just drag the file to your Framer project's ```modules/``` folder

# How it works
It extends ScrollComponent and ScrollComponent.updateContent() methods to render its sublayers in a stack, so everytime a sublayer is added or removed, it will re-render the entire list.

# How to use it
Create and setup a ListComponent like you would a ScrollComponent, then just add and remove sublayers to see it working.

```
{ListComponent} = require "listcomponent"
{ListGroup} = require "listcomponent"

# creates the list
myList = new ListComponent


# groups are sublayers in side the list component that group other layers. They help you subdivide your scrolling list without having to recalculate 


groupA = new ListGroup
myList.content.addSubLayer groupA

groupB = new ListGroup
myList.content.addSubLayer groupB


# I'll create three items, and position them in different groups so you can how groups can grow independently but they won't overlap.


listItem1 = new Layer
  width: Screen.width
  height: 200
  backgroundColor: Utils.randomColor()
  html: "Item 1, belongs to group A"

listItem1.onTap -> @destroy()

groupA.addSubLayer listItem1




listItem2 = new Layer
  width: Screen.width
  height: 200
  backgroundColor: Utils.randomColor()
  html: "Item 2, belongs to group B"

listItem2.onTap -> @destroy()

groupB.addSubLayer listItem2




listItem3 = new Layer
  width: Screen.width
  height: 200
  backgroundColor: Utils.randomColor()
  html: "Item 3, belongs to group A"
  
listItem3.onTap -> @destroy()

groupA.addSubLayer listItem3
```
