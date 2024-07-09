// import React, { useState } from 'react'
import "./App.css"

// const App = () => {

//   // let color = "Red"
//   const [color ,setColor] =useState("red")
//   const [buttonText, setButtonText] =useState("Blue")
  
  
//   const ChangeColor =()=>{
//     if(color==="Red"){
//       setColor("Blue")
//       setButtonText("Red")
//     }else{
//       setColor("Red")
//       setButtonText("Blue")
//     }
//   }

//   return (
//     <div>
//       <h1>
//         My fav color is {color}
//       </h1>
//       <button onClick={ChangeColor}>{buttonText}</button>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//   // const [brand ,setBrand]=useState("Ferrari")
//   // const [year, setYear] = useState(2023)
//   // const [model, setModel] = useState("Roma")
//   // const [color, setColor] = useState("Red")
//   const [car,setCar] =useState({
//     brand: "Ferrari",
//     year: 2023,
//     model: "Roma",
//     color: "Red"
//   })


//     const changeColor =()=>{
//       // setCar({...car, color:"Blue"})
//       setCar((prev)=>{
        
//         return {...prev , color: prev.color === "Red" ? "Blue" : "Red"}
//       })

//     }



//   return (
//     <div>
//       <h1>My {car.brand}</h1>
//       <h2>
//         It use a {car.color} {car.model} from {car.year}
//       </h2>
//       <button onClick={changeColor}>{car.color === "Red" ? "Blue" : "Red"}</button>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//   const [count,setCount] =useState(0)

//   const decreaseFn=()=>{
//     setCount((prev)=>{
//       if(prev <= 0){
//         prev=0
//         return prev
//       }else{
//         return prev - 1
//       }
//     })
    
//   }

//   const increaseFn = ()=>{
//     setCount((prev)=>{
//       return prev + 1
//     })
    

//   }
  


//   return (
//     <div>
//     <button onClick={decreaseFn}>Decrease</button>
//       <h1>Count : {count}</h1>
//     <button onClick={increaseFn}> Increase</button>
      
//     </div>
//   )
// }

// export default App


// useEffect


// import React, { useEffect, useState } from 'react'

// const App = () => {
  
//   const [count , setCount] =useState(0)
  

//   useEffect(()=>{
//     setTimeout(()=>{
//       setCount((prev)=>{
//         return prev + 1
//       })
//     },2000)
//   },[count])


//   return (
//     <div>
//         <h1>I've renderes  {count} times</h1>
      
//     </div>
//   )
// }

// export default App



// useRef

// import React, { useEffect, useRef, useState } from 'react';

// const App = () => {
//   const [value, setValue] = useState(0);
//   const count = useRef(0);


//   useEffect(()=>{
//     count.current++
//   })
  
  

//   return (
//     <div>
//       <button onClick={() => setValue(prev => prev - 1)}>-1</button>
//       <h1>Value: {value}</h1>
//       <button onClick={() => setValue(prev => prev + 1)}>+1</button>
//       <h1>Render count: {count.current}</h1>
//     </div>
//   );
// }

// export default App;


// import React, { useRef } from 'react'

// const App = () => {
//   const inputEl = useRef()


//   const handleSubmit = ()=>{
//     // console.log(inputEl)
//     // console.log(inputEl.current)
//     console.log(inputEl.current.value)
//     inputEl.current.value=""
//     inputEl.current.style.background="red"
//   }

//   return (
//     <div>
//       <input type="text" ref={inputEl}/>
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   )
// }

// export default App


// useMemo

// import React, { useMemo, useState } from 'react'

// const App = () => {
//   const [number, setNumber] =useState(0)
//   const [count, setCount] = useState(0)

//   function calculateFactorial(n){
    
//     console.log("calculation Done")
//     return Math.pow(n,3)
//   }

//   const res = useMemo(() => calculateFactorial(number), [number]);
//   // const res = calculateFactorial(number)



//   return (
//     <div>
//       <input type="number" value={{number}} onChange={(e)=>{setNumber(e.target.value)}}/>
//       <h1>cube of the number is: {res}</h1>
//       <button onClick={()=>{setCount(count+1)}}>Increment Count </button>
//       <h1>Count : {count}</h1>
      
//     </div>
//   )
// }

// export default App




// useCallback

// import React, { useState } from 'react'
// import Header from "./components/Header"

// const App = () => {
//   const [count ,setCount] =useState(0)

//   const IncreaseFn=()=>{
//     setCount((prev)=>{
//       return prev + 1
//     })
//   }

//   const newFun =()=>{
//     console.log("new Function called")
//   }




//   return (
//     <div>
//       <Header newFun={newFun}/>
//       <h1>{count}</h1>
//       <button onClick={IncreaseFn}>Increment</button>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react';

const App = () => {
  const [age, setAge] = useState("");
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const ageChangeFn = (e) => {
    setAge(e.target.value);
    setError(false); // reset error when age is changed
    setSubmitted(false); // reset submitted state when age is changed
  };

  const handleSubmit = () => {
    if (parseInt(age) < 18) {
      setError(true);
      setSubmitted(false);
    } else {
      setError(false);
      setSubmitted(true);
      console.log("Valid age submitted:", age);
      setAge("")
    }
  };

  const errorMSG = "You must be at least 18 years old";

  return (
    <div>
      <input
        type="number"
        value={age}
        onChange={ageChangeFn}
        placeholder="Enter your age"
      />
      {error && <p>{errorMSG}</p>}
      <button onClick={handleSubmit}>Submit</button>
      <h1>
        {submitted ? "Submitted" : ""}
      </h1>
    </div>
  );
};

export default App;
