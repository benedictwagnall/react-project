var HelloUser = React.createClass({ 


//Returns an object that contains state or data of our component
	getIinitialState: function(){

		return{
			username:'@benedict'
		 }

	},

//Setting a state and calling for it using the this keyword		
	render: function() {
		return(

			<div>
				Hello {this.state.username}
			</div>	

		)	

	}

  });
