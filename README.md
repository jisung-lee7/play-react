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
   - [useEffect](#useEffect)
   - [useReducer](#useReducer)
   - [useMemo](#useMemo)
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

### useEffect
- useEffect is a React Hook that lets you synchronize a component with an external system.
```jsx jsx
useEffect(setup, dependencies?)
```
<br>

#### Parameters
- setup
   - The function with your Effect’s logic. 
   - Your setup function may also optionally return a cleanup function.
   - When your component is added to the DOM, React will run your setup function. 
   - After every re-render with changed dependencies, React will *first run the cleanup function (if you provided it) with the old values*, and then run your setup function with the new values. 
   - *After your component is removed from the DOM, React will run your cleanup function.*
<br><br>

- optional dependencies
   - The list of all reactive values referenced inside of the setup code. 
   - Reactive values include props, state, and all the variables and functions declared directly inside your component body. 
   - If your linter is configured for React, it will verify that every reactive value is correctly specified as a dependency. 
   - The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3]. 
   - React will compare each dependency with its previous value using the Object.is comparison. 
   - If you omit this argument, your Effect will re-run after every re-render of the component.
<br><br>

- Lifecycle
   1. Mount: When the component is added to the DOM
   ```jsx jsx
   const App = () => {
     // API call on Mount
     useEffect(() => {
       console.log('Component mounted.')
       // Do something like call API..
     }, []) // Empty array ensures this runs only once(on mount)
   
     return <div>Hello, World!</div>
   }
   ```
   <br>

   2. Update: When the component re-renders
   ```jsx jsx
   const App = () => {
     const isMount = useRef(false)
     const [count, setCount] = useState(0)
   
     useEffect(() => {
       if (!isMount.current) {
         isMount.current = true
         return
       }
       console.log(`Count has changed: ${count}`)
     }) // Runs only when update
   
     // useEffect(() => {
     //   if (!isMount.current) {
     //     isMount.current = true
     //     return
     //   }
     //   console.log(`Count has changed: ${count}`)
     // }, [count]) // Runs only when your selected state(count) changes
   
     return (
       <div>
         <p>Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
       </div>
     )
   }
   ```
   <br>

   3. Unmount: When the component is removed from the DOM
      - *After your component is removed from the DOM, React will run your cleanup function.*
      ```jsx jsx
      // Viewer.jsx
      const Viewer = ({ toggle }) => {
        useEffect(() => {
          console.log('Component mount.')
      
          return () => {
            console.log('Component unmount.')
          }
        }, [toggle])
        return (
          <>
            <h1>{String(toggle)}</h1>
          </>
        )
      }

      // App.jsx
      const App = () => {
        const [toggle, setToggle] = useState(false)
        const handleToToggle = () => {
          setToggle((prev) => !prev)
        }
        return (
          <>
            <div>
              <button onClick={handleToToggle}>Toggle</button>
            </div>
            {toggle ? <Viewer toggle={toggle} /> : null}
          </>
        )
      }
      ```
      <br>

      - After every re-render with changed dependencies, React will *first run the cleanup function (if you provided it) with the old values*, and then run your setup function with the new values. 
      ```jsx jsx
      const App = () => {
        const [toggle, setToggle] = useState(false)
        const handleToToggle = () => {
          setToggle((prev) => !prev)
        }
      
        useEffect(() => {
          console.log('Component mounted.')
      
          return () => {
            console.log('Run cleanup function')
          }
        }, [toggle])
      
        return (
          <>
            <h1>{String(toggle)}</h1>
            <div>
              <button onClick={handleToToggle}>Toggle</button>
            </div>
          </>
        )
      }
      ```
      <br>

### useReducer
- useReducer is a React Hook that lets you add a reducer to your component.

```jsx jsx
const [state, dispatch] = useReducer(reducer, initialArg, init?)
```
<br>

#### Parameters
- reducer
   - The reducer function that specifies how the state gets updated. 
   - It must be pure, should take the state and action as arguments, and should return the next state. 
   - State and action can be of any types.
- initialArg 
   - The value from which the initial state is calculated. 
   - It can be a value of any type. 
   - How the initial state is calculated from it depends on the next init argument.
- optional init
   - The initializer function that should return the initial state. 
   - If it’s not specified, the initial state is set to initialArg. 
   - Otherwise, the initial state is set to the result of calling init(initialArg).
<br><br>

