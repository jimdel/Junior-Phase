# Final Review

## Browser/Client Side

### React

#### Props

- Props are accessed in two ways depending on the type of component
  - Dumb Components
    - Must be connected to the store (discussed in Redux Section)
    - When defining the dumb componenet pass in `props` as a parameter
      - ex:

```javascript
        function ThisIsADumbComponent(props) {
          //Since props was passed in as a parameter we can access them:
          return (
            <div>{props.examplePropName}</div>
          )
        }
```
  - Smart (Stateful Components)
    - Can function without a redux store
    - All their functionality is stored in their state and from props passed down when they are called
    - ex:

```javascript
  //Pass the props in from the Main Component file
    render() {
      <div>
        <ThisIsASmartComponent exampleProp='Whatever you want to assign it'/>
      </div>
    }
  //Defining a Stateful Componenet
  export default class ThisIsASmartComponenet extends Component {
    constructor(props) {
      super(props);
      this.state = {
        exampleState: 'Example State'
        }
    }
    componentDidMount() {
      //Make any axios or other async calls here
    }

    render() {
      return (
        <div>
          <h1>{this.exampleState}</h1>
          <h2>{this.props.exampleProp}<h2>
        </div>
      )
    }
  }
```
