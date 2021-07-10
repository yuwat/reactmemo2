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
  return (
    <div>
      <Cat />
    </div>
  )
}
const Cat = () => {
  return (
    <div>Hi!</div>
  )
}




export default App;
