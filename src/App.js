import React,{useState, useEffect} from 'react';
import './App.css'


function App() {
  return (
    <div className="container">
      hello world!
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2} date={(new Date()).toLocaleString()}></ClassComp>
    </div>
  );
}

var funcStyle = 'color:blue';
var funcID = 0;

function FuncComp(props) {


  var numberState = useState(props.initNumber);
  var number = numberState[0]
  var setNumber = numberState[1];
  //console.log('numberState', numberState)
  //console.log('number', number)
  //var dateState = useState((new Date()).toString());
  //var _date = dateState[0];
  //var setDate = dateState[1];
  //console.log(date)
  var [_date, setDate] = useState((new Date().toString()))

  useEffect(function(){
    console.log('%cfunc => useEffect(componentDidMount & componentDidUpdate )'+(++funcID), funcStyle);  
    document.title = number + ' : ' + _date;
    //it changes html title which is far from this = SIDE EFFECT
  });
    console.log('%cfunc => render'+(++funcID), funcStyle);
  return(
    <div className="container">
      <h2>function style component</h2>
      <p>number : {number}</p>
      <p>date :{_date}</p>
      <input type="button" value="random" onClick={
          function(){
            setNumber(Math.random())
        }}></input>
      <input type="button" value="date" onClick={
          function(){
            setDate((new Date()).toString())
        }}></input>
      </div>
  )
}
var classStyle = 'color:red';
class ClassComp extends React.Component{
  state = { 
    number: this.props.initNumber,
    date: (new Date()).toString()
  }

  componentWillMount() {
    console.log('%cclass => componentWillMount',classStyle)
  }

  componentDidMount() {
    console.log('%cclass => componentDidMount',classStyle)
  }
  // it return true or false and decide wether do do render or no 
  shouldComponentUpdate(nextProps, nextState) {
    console.log('%cclass => shouldComponentUpdate',classStyle)
    return true;
  }

  componentWillUpdate() {
    console.log('%cclass => componentWillUpdate',classStyle)
  }

  componentDidUpdate() {
    console.log('%cclass => componentDidUpdate',classStyle)
  }

  render(){
    console.log('%cclass => render', classStyle)
    return(
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>date : {this.state.date}</p>
        <input type="button" value="random" onClick={
          function(){
            this.setState({number:Math.random()})
          }.bind(this)
        }></input>
        <input type="button" value="date" onClick={
          function(){
            this.setState({date: new Date().toString()})
          }.bind(this)
        }></input>
      </div>
    )
  }
}

export default App;
