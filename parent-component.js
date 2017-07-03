//Parent componenet to demonstrate the relationship between components with regards to props


//Sets the initial states of the component FriendsContainer's attributes.
var FriendsContainer = React.createClass({
	getInitialState: function(){
		return{
			name:'Benedict Wagnall'
			friends: ['Huy Nguyen', 'Vilde Regine Stugaard Reksnes', 'Robert Loveless'] 
		}	
	},



//Calls the name from state in the render (set above), as well as the friends list.
//Creates the names prop from the friends attribute.
	render: function(){
		return(
		<div>
			<h3> Name: {this.state.name} </h3>
			<ShowList names={this.state.frends} />
		</div>
		)
	}
});
