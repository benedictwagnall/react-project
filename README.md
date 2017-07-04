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





Work in progress!

