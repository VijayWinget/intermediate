import { useState } from "react"

function List(){

const  [list ,setList] = useState(['testone','testTwo'])


function addItem(){
setList(prevstate =>{
    return [...prevstate,'TestThree'] 
})
}
return (<>
    <h1>List Ul fuction component </h1>

     <button   onClick={()=>{ addItem()}}  > Add Item</button> 
     <ul>{ list.map((data,i)=> <li>{data}</li> )}</ul></>) 

}


export default List;