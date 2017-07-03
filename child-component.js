//Child comoponent to demonstrate the relationship between components with regards to the use of props

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
