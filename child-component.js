//Child comoponent to demonstrate the relationship between components with regards to the use of props


//Calls on the names prop, maps the elements of that list into a new array: listItems. This basically just takes the js List and wraps <li> tags around them to make it valid html for display.
var ShowList = React.createClass ({ 
	render: function(){
		var listItems = this.props.names.map(function(friend)){
			return <li> {friend} </li>;
		});
		
		return (
		<div>
			<h3> Friends </h3>	
			<ul>
				{listItems}
			</ul>
		</div>
		)

	}
  });
