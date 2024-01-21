import React from "react";

const SearchItem = ({search, setSearch, handleSearch}) => {
  return (
    <div>
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          name=""
          id="search"
          role="searchbox"
          value={search}
          placeholder="Search for an item"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchItem;
