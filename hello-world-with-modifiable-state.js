


var HelloUser = React.createClass({ 
	getInitialState: function(){
		return {
			username: '@benedict'
		}		
	},


	//This function sets the username to the supplied parameter, (e).
	handleChange: function(e){
		this.setState({
			username: e.target.value
		});
	},

	//This calls the handleChange function when a user changes their username in a form.
	render: function(){
		return (
			<div>
				Hello {this.state.username} <br />
				Change Name: <input type = "text" value={this.state.username} onChange={this.handleChange}  />
			</div>
		)
	}
});

//1. User types into the input box.
//2. handleChange is evoked.
//3. The state of our component is set to a new value.
//4. React re-renders the Virtual DOM.
//5. React Diffs the change.
//6. Real DOM is updated.
