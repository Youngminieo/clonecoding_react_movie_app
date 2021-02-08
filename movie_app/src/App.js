import React from "react";

// 인자로, props의 이름을 직접 받아도 되고
// props로 뭉탱이로 넘겨도 된다.
function Potato({favorite}){
  return(
    <h1>I like {favorite}</h1>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Hello!!</h1>
      <Potato favorite="Kimchi" />
      <Potato favorite="rice" />
      <Potato favorite="lamen" />
    </div>
  );
}

export default App;
