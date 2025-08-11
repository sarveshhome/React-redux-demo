import React from 'react'

export default function ChildComp({onSetClick}) {


  return (
    <>

    <button onClick={onSetClick}>child comp Click</button>
    </>
  )
}
