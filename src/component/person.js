import React from 'react'

const Person = (props) => {
  return (
    <div>
    <h1 onClick={props.click}>I'm {props.name} and My age is {props.age}</h1>
    <input onChange={props.change}/>
    </div>
  )
}

export default Person
