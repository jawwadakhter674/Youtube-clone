import React, { useState } from 'react'
import './catageries.scss'

const keyword = [
    'All',
    'Music',
    "Ertugral",
    "Programming",
    "Status Songs",
    "Bollywood Movies",
    "hollywood movies",
    "Cricket",
    "Football",
    "PSL"
]
function Catageriesbar() {
    const [activeElement,setActiveElement]=useState("All")


    const handleClick=(value)=>{
   setActiveElement(value)
    }


    return (
       <div className="categoriesbar">
           {
               keyword.map((value,i)=>(
         <span key={i} onClick={()=>handleClick(value)} className={activeElement===value?"active":""}> {value}</span>

               ))
           }
       </div>
    )
}

export default Catageriesbar
