import React from 'react';

const SearchBar = ({ searchchange, searchsubmit, searchinput }) => {
  return (
    <>
      <header>
        <form onSubmit={searchsubmit}>
          <input
            className="search"
            value={searchinput}
            type="search"
            placeholder="Search..."
            onChange={searchchange}
          />
        </form>
      </header>
    </>
  );
};

export default SearchBar;
