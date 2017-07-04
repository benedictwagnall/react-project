var FriendsContainer = React.createClass ({
	
	
	getInitialState: function(){
		alert('In getInitialState');
		return{
			name: 'Benedict'
		}
	},



	// Invoked once, before initial render: For example, setting up a database (or websocket?)
	// connection. i.e. something that is done once at the beginning of a session and doesn't need
	// to be repeated. 
	componentWillMount: function(){
		alert('In Component Will Mount');
	},


	// Invoked once, after the initial render: AJAX requests go here at the advice of facebook developers.
	// Seeing as the initial render has taken place, we have access to the virtual DOM, this is achieved by ---this.getDOMNode()---
	// Any initial DOM tweaks that require data to be fetched would go here.
	componentDidMount: function(){
		alert('In Component Did Mount');
	},
	

	// This is called whenever there is a change to props. This can react to a prop change before rendering occurs, resetting it for
	// example. Not sure of a use case for this.
	componentWillReceiveProps: function(){
		alert('In Component Will Receive Props')
	},


	// Invoked immediately before a component is unmounted from the DOM, this is a good place to do necessary clean up, i.e tearing
	// down a connection.
	componentWillUnmount: function(){
		 
	}




});
