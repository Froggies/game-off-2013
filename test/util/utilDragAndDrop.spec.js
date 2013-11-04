var dependencies = [
	'util/UtilDragAndDrop'
];

define(dependencies, function() {

	describe('in util drag and drop', function() {

		var element = document.createElement('div');

		beforeEach(function() {
		});

		it(' should make draggable an element', function () {
			UtilDragAndDrop.makeDraggable(element);
			expect(element.draggable).toBe(true);
		});

		it(' should make undraggable an element', function () {
			UtilDragAndDrop.makeDraggable(element);
			UtilDragAndDrop.makeUndraggable(element);
			expect(element.draggable).toBe(false);
		});

		it(' should make droppable an element', function () {
			UtilDragAndDrop.makeDroppable(element);
			expect(element.ondragenter).toBeDefined();
			expect(element.ondragover).toBeDefined();
			expect(element.ondrop).toBeDefined();
		});

		it(' should move draggable element into droppable element on drop', function () {
			UtilDragAndDrop.makeDroppable(element);
			var drag = document.createElement('div');
			UtilDragAndDrop.makeDraggable(drag);
			expect(element.children.length).toBe(0);
			drag.ondragstart();
			element.ondrop({
				stopPropagation: function(){}
			});
			expect(element.children[0]).toBe(drag);
		});

	});

});