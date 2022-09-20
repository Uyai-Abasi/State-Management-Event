import React from "react";
import Card from "./item";
function Display() {
    let items=[
        {
            name:'uyai',
            school:'unical',
            height:'6',
            id:'1',
        },
        {
            name:'grace',
            school:'uniport',
            height:'4',
            id:'2',
        },
        {
            name:'gracelyn',
            school:'uniuyo',
            height:'3',
            id:'3',
        }

    ]
  
    return(
        <>
        <Card items={items}/>
        {/* <Card items={items}/> */}
        
        </>
    )
}
export default Display;