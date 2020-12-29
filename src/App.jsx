import React from 'react';
import Card from './Card';
import cardData from './CardData';
import './index.css';


function App()
{
    return(
        
<>
<h1 >NETFLIX</h1>
{cardData.map((val) => {

    return (
        <Card 
        imgsrc={val.imgsrc}
        sname={val.sname}
        title = {val.title}
        link={val.link}
        />
    )
})}
</>
)
}

export default App;

//    function sum(a,b){
//       return a+b ;
//   }
//   now this with fat arrow function 
//      const sum = (a,b)=> a+b;
//