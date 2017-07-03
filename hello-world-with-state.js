var HelloUser = React.createClass({ 


//Returns an object that contains state of data of our component
	getIinitialState: function(){

		return{
			username:'@benedict'
		 }

	},

//Setting a state and calling for it using the this keyword, returning it's own state. Return hello benedict		
	render: function() {
		return(

			<div>
				Hello {this.state.username}
			</div>	

		)	

	}

  });
