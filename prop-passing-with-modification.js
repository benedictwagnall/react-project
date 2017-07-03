var FriendsContainer = React.createClass({
	getInitialState: function(){
		return {

			//States of FriendsContainer
			name: 'Benedict Wagnall'
			friends: [
				'Bob',
				'Blob',
				'Bleb'
			],
		}
	},


	//Add the supplied friend to the current list of friends
	addFriend: function(friend){
		this.setState({ 
			friends: this.state.friends.concat([friend])
		});
	},	


	
	render: function(){
		return (
			<div>
				<h3> Name: {this.state.name} </h3>

				//Components:
				<AddFriend addNew={this.addFriend} />
				<ShowList names={this.state.friends /}>
			
			</div>
		)
	}
});


// ----SEPARATE FILE-----
// AddFriend Component

var AddFriend = React.createClass ({
	getInitialState: function(){ 
		return {
			//Initialise as empty string?
			newFriend: ''
		}
	},


	updateNewFriend: function(e){
		this.setState({

			newFriend: e.target.value
			
		});
	},

	//Called onClick for the button - add new friend
	handleAddNew: function(){
		this.props.addNew(this.state.newFriend);
		this.setState({
			newFriend: ''
	 });
	},

//render TODO


});



