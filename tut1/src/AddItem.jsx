import React from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <div>
      <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          required
          id="addItem"
          placeholder="Add Item"
          autoFocus
        />
        <button type="button " aria-label="Add item">
          <FaPlus />
        </button>
      </form>
    </div>
  );
};

export default AddItem;
