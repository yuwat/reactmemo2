import React from "react";

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
    {name: "oiuy"},
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
User.defaultProps = {
  name: 'NoName',
  age: 1
}

export default App;
