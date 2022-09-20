// import React,{useState} from "react";
// const Form = () => {
//     const [value, setValue] = useState(10);
//     return ( 
//         <>
// {/* <h1>{useState} </h1> */}
//         <button onClick={() => setValue(value + 1)} style={{width:"30px;",height:'20px'}}>{value}</button>
//         </>
//      );
// }
 
// export default Form;

// import React,{useState} from "react";
// const Form = () => {
//     const[stateValue, update]=useState(10);
//     const handleClick = () => {
//         update(stateValue + 1)
//     }
//     return ( 
//         <>
// {/* <h1>{useState} </h1> */}
//         <button onClick={handleClick} style={{width:"30px",height:'20px'}}>{stateValue}</button>
//         </>
//      );
// }
 
// export default Form;

import React,{useState} from "react";
import Display from "./display";
const Form = () => {
    const[stateValue, update]=useState('Uyai');
    const handleClick = () => {
        update("isidore")
    }
    return ( 
        <>
        <Display/>
<h1>{stateValue} </h1>
        <button onClick={handleClick} style={{height:'20px'}}></button>
        </>
     );
} 
export default Form;