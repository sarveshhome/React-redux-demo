import React from 'react'
import ChildComp from './ChildComp'

export default function ParentComp() {

  const [value, setValue] = React.useState("");

  function handleClick() {
    setValue("click form child component");
    console.log('click form child component');
   
  }

  return (
    <>
        <div>ParentComp</div>
        <ChildComp onSetClick={handleClick}></ChildComp>
         {value}
    </>
  )
}
