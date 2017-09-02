// Configuration for the directive

angular
	.module('todoList.components.book')
	.directive('book', Book);
 
function Book() {
	return {
		restrict: 'E',
		scope: {
			bookData: '='
		},
		templateUrl: '/todoList/features/components/book/book.html',
		controller: BookCtrl,
		controllerAs: "BookVM",
		bindToController: true
	}
}

function BookCtrl () {



}

// RESTRICT: tells what type this directive can be used as
// throughout the other parts of the code
// E: element - A: attribute (more used)
// C: class  - M: comment (less used)

// SCOPE: used to pass things from the view into the directive 
// We gotta tell the directive the name of properties that will
// define the scope (bookData in this case - use <book-data=''> in the view

// They can be configured in 3 ways (The prefix - data binding):
// @ (one-way): data from the view to the directive ONLY (string)
// = (two-way): data passed back and forth, changing 
// 				both view and directive (variable)
// & (function): pass a function into the directive, and be able
//				 to call that function

// TEMPLATE URL: the view that the Directive is going to use

// CONTROLLER: takes a function that is defined below (Book Ctrl)
// the controller lives in the directive file as well

// CONTROLLER AS: same as the normal controller (BookVM)

// BIND TO CONTROLLER (true): Tells Angular to get all the info 
// passes in to the scope and bind to the View Model