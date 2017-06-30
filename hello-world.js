
//Basic class to demonstrate and learn the creation of componenets with React.

//Saved in a var so that we can specify which element needs to be rendered in the DOM
var HelloWorld = React.createClass ({ 

	render: function(){
		
		return (

			<div>
				Hello World!
			</div>
		)

	}


    });


//Takes two args: Desired component-to-render, DOM node to render to.
//Take the HelloWorld component and render it to the element with ID of app.
ReactDOM.render( <HelloWorld />, document.getElementById('app'));
