import { useState } from "react";
import FunctionCompo from "./Compo/FunctionCompo";
import ClassCompo from "./Compo/ClassCompo";


function App() {
  const [funcClick,setFuncClick]=useState(false);
  const [classClick,setclassClick]=useState(false);
  return (
    <>
    <h1>Styling using Functional and Class Component</h1>
    <div className="flex">
      <div className="button">
    <button className="buttonspace buttonStyle" onClick={()=>setFuncClick(!funcClick)}>To see styling in function Component</button>
    <button className="buttonStyle" onClick={()=>setclassClick(!classClick)}>To see styling in Class Component</button>
    </div>
 
   {funcClick && <FunctionCompo />}
   {classClick && <ClassCompo />}
   </div>
   
   
   </>
  );
}

export default App;
