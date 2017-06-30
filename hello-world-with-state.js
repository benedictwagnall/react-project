var HelloUser = React.createClass({ 


//Returns an object that contains state or data of our component
	getIinitialState: function(){

		return{
			username:'@benedict'
		 }

	},

//		
	render: function() {
		return(

			<div>
				Hello {this.state.username}
			</div>	

		)	

	}

  });
