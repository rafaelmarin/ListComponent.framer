class exports.ListComponent extends ScrollComponent

	constructor: (options={}) ->
		options.scrollHorizontal ?= false
		options.directionLock ?= true
		options.width ?= Screen.width
		options.height ?= Screen.height
		
		super options
		
		@_context.on "layer:destroy", =>
			@updateContent()
		
		@content.updateContent = =>
			@updateContent()
				
	updateContent: =>
		for sublayer,i in @content.subLayers
			if i == 0
				@content.subLayers[0].y = 0
			else
				@content.subLayers[i].y = @_content.subLayers[i-1].y + @_content.subLayers[i-1].height
		super


class exports.ListGroup extends Layer
	constructor: (options={}) ->
		super options
		@on "change:children", @updateContent
		
		@_context.on "layer:destroy", => @updateContent()

	updateContent: =>
		@height = 0
		for sublayer,i in @subLayers
			if i == 0
				@subLayers[0].y = 0
				@height += @subLayers[0].height
			else
				@subLayers[i].y = @subLayers[i-1].maxY
				@height += @subLayers[i].height
		try @parent.updateContent()