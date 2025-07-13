import React from 'react'
import { useSelector } from 'react-redux'

const Shop = () => {
    const categories = useSelector(p=>p);
    
  return (
    <div>{categories.map(item=>(
        <li key={item.id}>{item.categoryName}</li>
    ))}</div>
  )
}

export default Shop