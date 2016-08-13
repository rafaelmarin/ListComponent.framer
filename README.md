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

myList = new ListComponent

listItem1 = new Layer
  width: Screen.width
  height: 200
  backgroundColor: Utils.randomColor()

listItem2 = new Layer
  width: Screen.width
  height: 200
  backgroundColor: Utils.randomColor()

listItem3 = new Layer
  width: Screen.width
  height: 200
  backgroundColor: Utils.randomColor()
  
myList.content.addSubLayer listItem1
myList.content.addSubLayer listItem2
myList.content.addSubLayer listItem3
```
