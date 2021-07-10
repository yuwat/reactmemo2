import React from "react";
import PropTypes from 'prop-types';

// class App extends Component {
//   render(){
//     // const greeting = "Hi!";
//     // const dom = <h2>{greeting}</h2>;
//     // return dom;
   
//     // return <input type="text" onClick={()=>{console.log("Im Happy")}}></input>

//     return(
//       <div>
//         <label htmlForm="bar">bar</label>
//         <input type="text" onChange={()=>{console.log("Im Happy")}}></input>
//       </div> 
//     )
//   }
// }
const App = () => {
  const profiels = [
    {name: "TARO", age: 0},
    {name: "HANA", age: 9},
    {age: 8},
    {}
  ]
  return (
    <div>
      {
        profiels.map((prf, index)=> {
          return <User name={prf.name} age={prf.age} key={index} />
        })
        
      }
    </div>
  )
}
const User = (props) => {
  return (
    <div>Hi! {props.name} そして {props.age} </div>
  )
}

User.propTypes = {
 name: PropTypes.string, 
 age: PropTypes.number.isRequired, 
}
// User.defaultProps = {
//   name: 'NoName',
//   age: 1
// }

export default App;
