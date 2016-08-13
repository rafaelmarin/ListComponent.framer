{ListComponent} = require "ListComponent"
{ListGroup} = require "ListComponent"

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