import React from 'react'
import {FaPlus} from 'react-icons/fa'

const AddItem = () => {
  return (
    <div>
      <form className='addForm'>
        <label htmlFor="addItem">Add Item</label>
        <input type="text" name="" id="addItem" placeholder='Add Item' autoFocus />
        <button type='button ' aria-label='Add item'>
            <FaPlus />
        </button>
      </form>
    </div>
  )
}

export default AddItem
