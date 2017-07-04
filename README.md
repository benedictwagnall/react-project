A github notetaker app built in React.

Made by following a tutorial created by Tyler McGinnis, available from www.tylermcginnis.com/reactjs-a-comprehensive-guide-to-building-apps-with-react/


	---hello-world:

A simple example of updating the DOM using React. A variable is used to store the component, which is then passed to the render method along with the desired node in the DOM.

 The render function within the component construction is in essence a template for the component. The ReactDOM.render method however is the final rendering of the desired components to the DOM. So:

render == 'Captain, my calculations show that this is how the component should look'

ReactDOM.render == 'Make it so, Mr Data'



	---hello-world-with-states:

State is as it sounds: some state of being that a component is exhibiting at any given moment, more techincally speaking this is the internal data store of an object. In a multi component heirarchy a common parent manages the state and passes it down to child components using props. In this example we set the state of our component using getInitialState and then call for it with the 'this' keyword. {this.state.(desired attr. w/o brackets)}. So: set state, render using the state as part of the template.

'Mr Data, you are a fluffy bunny. What are you, Mr Data?'

'I am a fluffy bunny, Captain, look!'



	---hello-world-with-modifiable-states:

We need to be able to update the state so that things can change. eg: A simple webpage with a text input and submit button that displays what you enter into the box. When you press submit, the state of the component (the form element 'input') is updated, then the DOM is re rendered with the new information. This is done with the setState method. Whenever setState is called, the VirtualDOM re-renders, diffs, and updates the real DOM. When state is updated we need to update the DOM to represent this.

In the code example, handleChange calls setState with the parameter e.target.value (the contents of the input field). handleChange is called thanks to the actions of onChange, a js event handler (similar to onClick etc).
 So: 

\n The user enters something into the text box, (x).
\n onChange notices this and responds by calling handleChange with the new input (x) as a parameter.
\n handleChange calls setState on the specified attribute (username) supplying the (x) input.
\n React re-renders the virtualDOM.
\n React diffs the VirtualDOM and the actual DOM.
\n actual DOM is updated.
\r username is now displayed as (x).


'Mr Data?'

'Yes, Captain?'

'Never mind.'



	---basic-props:

Props are the means by which we tranfer state from parent to child. In the example code we can use {this.props.name} to access a prop (property). in the example code, the name prop is created within the tag <HelloUser name='Benedict' />. It is then called again by {this.props.name}, this is not a parent-child heirarchy as the prop is being called within the component - hence the use of the 'this' keyword.



	---parent-component:

Parent component is FriendsContainer.
FriendsContainer has the states name and friends.
In the render function of FriendsContainer, we create a new child component called ShowList.
Showlist is given the prop name which is populated with the contents of the friends state.
FriendsContainer gives ShowList the prop, names, containing one of its own states.



	---child-component
 
Child component is ShowList.
Here, the names prop is used to populate a new list called listItems
listItems is the same but has <li> tags wrapped around the elements to allow it to be displayed in HTML.
listItems is returned by the render of ShowList, which is called during the render of FriendsContainer.


	---prop-passing-with-modification---

Prop Stuff:

AddFriend  
The parent component is FriendsContainer, which has the method addFriend. This is where the friends list is stored, so any manipulation has to be done here. The AddFriend component has the addNew prop, which contains access to the method addFriend from its parent (FriendsContainer).

ShowList  
The ShowList component has the prop 'name' which contains the 'friends' state from FriendsContainer 


Walkthrough  
Text box is created with an empty string 'newFriend'.  
A user inputs a new string into the box and presses the button.

The new input fires the onChange event handler which updates the empty string with whatever the user has entered
The user then presses the button which fires the onClick event handler, calling the handleAddNew method
handleAddNew uses the prop addNew to access the addFriend method, supplying it with the updated newFriend string, clearing it afterwards.
The addFriend method takes this string and appends it to the current list of friends. addFriend is a method of the FriendContainer parent class, we only have access to it because the prop was passed down to the AddNew component. 


	---default-props---

This just specifies a 'plan B' if nothing is passed as a prop. In the example: an appropriately name empty array, is created if nothing is passed.

	---type-checking---

Specify which types of prop are allowed, or required.


	---Life-Cycles---
Initial(mounting)  

	componentWillMount: This is where you do some things that need to be done at the start
	of your process, i.e. setting up database connections  
	  
	componentWillUnmount: This is for things that need to take place at the start, but after 	the initial DOM render, If you needed some information via AJAX, to mount onto the DOM, 	you would do this here.  
  
  
Updates  
	
	componentWillReceiveProps: Whenever a prop is changed, this is called. Still unsure as t	o the use of this.

Unmounting

	componentWillUnmount: Invoked immediately before a component is unmount from the DOM. 		Any required cleanup should go here

The chain of this Life Cycles (plus others) is as follows:

willMount >> didMount >> willReceiveProps >> shouldUpdate >> willUpdate >> render >> didUpdate >> willUnmount














Work in progress!

