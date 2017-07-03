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

We need to be able to update the state so that things can change. eg: A simple webpage with a text input and submit button that displays what you enter into the box. When you press submit, the state of the component (the form element 'input') is updated, then the DOM is re rendered with the new information. This is done with the setState method. handleChange...

''

---basic-props:

---child-component:

---parent-component:

Work in progress!

