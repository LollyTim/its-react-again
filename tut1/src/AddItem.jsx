import React from "react";
import { FaPlus } from "react-icons/fa";
import { useRef } from "react";



const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <div>
      <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          required
          ref={inputRef}
          id="addItem"
          placeholder="Add Item"
          autoFocus
        />
        <button type="submit" onClick={() => inputRef.current.focus()} aria-label="Add item">
          <FaPlus />
        </button>
      </form>
    </div>
  );
};

export default AddItem;
