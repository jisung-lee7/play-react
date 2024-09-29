# play-React

My personal playground for React coding and learning.

## :pushpin: Summary
### Table of contents
- [React](#label-React)
- [JSX](#label-JSX)
- [Props](#label-Props)
- [React event object](#label-react-event-object)
- [Re-rendering conditions](#label-re-rendering-conditions)
- [React Hooks](#label-react-hooks)
   - [useState](#useState)
   - [useRef](#useRef)
<br><br>

## :label: React
- The library for web and native user interfaces
<br><br>

### Create user interfaces from components
### Write components with code and markup
### Add interactivity wherever you need it
### Go full-stack with a framework
### Use the best from every platform
<br><br>

## :label: JSX
- JavaScript eXtensions
- The Rules of JSX
   1. Return a single root element 
   2. Close all the tags or self-closing tags
   3. camelCase all most of the things
   4. Using JavaScript Expressions with Curly Braces {}
   5. Use className Instead of class
<br><br>

## :label: Props
- React components use props to communicate with each other. 
- Every parent component can pass some information to its child components by giving them props. 
- Props might remind you of HTML attributes, but you can pass any JavaScript value through them, including objects, arrays, and functions.
<br><br>

## :label: React event object 
- Your event handlers will receive a React event object. It is also sometimes known as a “synthetic event”.
```jsx jsx
<button onClick={e => {
  console.log(e) // React event object
}} />
```
<br>

## :label: Re-rendering conditions
1. When the component's state changes
   - A React component re-renders whenever its internal state changes.
   - For example, calling setState (or useState in functional components) triggers a re-render.
   ```jsx jsx
   const [count, setCount] = useState(0)
   
   const handleClick = () => {
     setCount(count + 1)  // State changes, causing re-render
   }
   ```
   <br>
2. When props change
   - A component will re-render if the props it receives from a parent component change.
   - Whenever the parent component re-renders and passes new props, the child component will also re-render.
   ```jsx jsx
   const ParentComponent = () => {
     const [value, setValue] = useState(0)
   
     return <ChildComponent count={value} />
   }
   
   const ChildComponent = ({ count }) => {
     // The Child component re-renders whenever the 'count' prop changes
     return <div>{count}</div>
   }
   ```
   <br>
3. When the parent component re-renders
   - If a parent component re-renders, all of its child components will also re-render by default.
   - Any changes in the parent’s state or props will trigger a re-render for the children.
   ```jsx jsx
   const ParentComponent = () => {
     const [count, setCount] = useState(0)
   
     const handleClick = () => {
       setCount(count + 1)  // Parent state changes, triggering re-render
     }
   
     return (
       <div>
         <h1>Parent Component</h1>
         <p>Count: {count}</p>
         <button onClick={handleClick}>Increment Count</button>
         <ChildComponent />
       </div>
     )
   }
   
   const ChildComponent = () => {
     console.log('Child component re-rendered')
     return <div>Child Component</div>
   }
   ```
   <br>
4. When useContext values change
   - If a component subscribes to a context using the useContext hook, it will re-render whenever the context’s value changes.
   ```jsx jsx
   const ThemeContext = React.createContext('dark')
   
   const App = () => {
     const [theme, setTheme] = useState('dark')
     return (
       <ThemeContext.Provider value={theme}>
         <ThemedComponent />
       </ThemeContext.Provider>
     )
   }
   
   const ThemedComponent = () => {
     const theme = useContext(ThemeContext)  // Re-renders when the context value changes
     return <div>{theme}</div>
   }
   ```
   <br>
5. When forceUpdate is called
   - In class components, you can force a re-render by calling the forceUpdate method.
   ```jsx jsx
   class MyComponent extends React.Component {
     forceRender = () => {
       this.forceUpdate()  // Force a re-render
     }
   }
   ```
   <br>
6. When React.memo is used and props change
   - React.memo prevents a functional component from re-rendering if its props remain the same.
   - If props change, the component will still re-render.
   ```jsx jsx
   const MemoizedComponent = React.memo(({ value }) => {
     return <div>{value}</div>
   })
   ```
   <br>
7. When the key changes
   - When rendering lists, React uses the key prop to track elements. If the key of an item changes, React treats it as a new component and will re-render it.
   ```jsx jsx
   const items = [1, 2, 3]
   return items.map(item => <ChildComponent key={item} />)
   ```
   <br>

## :label: React Hooks
### useState
- useState is a React Hook that lets you add a state variable to your component.
```jsx jsx
const [state, setState] = useState(initialState)
```
<br>

#### Parameters
- initialState: The value you want the state to be initially. It can be a value of any type, but there is a special behavior for functions. This argument is ignored after the initial render.
   - If you pass a function as initialState, it will be treated as an initializer function. 
   - It should be pure, should take no arguments, and should return a value of any type. 
   - React will call your initializer function when initializing the component, and store its return value as the initial state. 

#### Returns
- useState returns an array with exactly two values:
   1. The current state. During the first render, it will match the initialState you have passed.
   2. The set function that lets you update the state to a different value and trigger a re-render.
<br><br>

### useRef
- useRef is a React Hook that lets you reference a value that’s not needed for rendering.
```jsx jsx
const ref = useRef(initialValue)
```
<br>

#### Parameters
- initialValue: The value you want the ref object’s current property to be initially. It can be a value of any type. This argument is ignored after the initial render.

#### Returns
- useRef returns an object with a single property:
   - current: Initially, it’s set to the initialValue you have passed. You can later set it to something else. If you pass the ref object to React as a ref attribute to a JSX node, React will set its current property.
   - On the next renders, useRef will return the same object.
<br><br>
