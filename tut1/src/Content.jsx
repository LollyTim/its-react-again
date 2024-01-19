import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const name = ['lolly', 'Emma', 'dave', 'kevin', 'joe'];
        const int = Math.floor(Math.random() * 5);
        return name[int];
    }
  return (
    <div>
        <h1>Hello, {handleNameChange()}!</h1>
    </div>
  )
}

export default Content