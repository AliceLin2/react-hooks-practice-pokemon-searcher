import React from "react";

function Search({searchTerm, onSearch}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchTerm} onChange={e=>onSearch(e.target.value.toLowerCase())}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
