import React from 'react'
import Todotodo from './Todotodo'

export default function TodoList({items}) {
  return (
    <div>
      
      {items.map((item) => (
        <Todotodo item={item}/>
      ))}

    </div>
  )
}
