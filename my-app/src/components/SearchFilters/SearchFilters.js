import React from 'react';
import './SearchFilters.css'; 

  
  const SearchFilters = () => {

  return (
    <div className="container">
      <div className="column">
        <p className="filter-title">Location:</p>
        <input type="radio" id="option1" name="group1" />
        <label htmlFor="option1">NA</label><br />
        <input type="radio" id="option2" name="group1" />
        <label htmlFor="option2">EU</label><br />
        <input type="radio" id="option3" name="group1" />
        <label htmlFor="option3">Global</label><br />
      </div>
      <div className="column">
        <p className="filter-title">Style:</p>
        <input type="radio" id="option4" name="group2" />
        <label htmlFor="option4">Tags</label><br />
        <input type="radio" id="option5" name="group2" />
        <label htmlFor="option5">Pieces</label><br />
        <input type="radio" id="option6" name="group2" />
        <label htmlFor="option6">Throw-Ups</label><br />
      </div>
      <div className="column">
        <p className="filter-title">Technique:</p>
        <input type="radio" id="option7" name="group3" />
        <label htmlFor="option7">Freehand</label><br />
        <input type="radio" id="option8" name="group3" />
        <label htmlFor="option8">Stencil</label><br />
        <input type="radio" id="option9" name="group3" />
        <label htmlFor="option9">Mixed-Media</label><br />
      </div>
      <div className="column">
        <p className="filter-title">Challenge:</p>
        <select id="challenge" name="challenge">
          <option value="none">None</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <p className="filter-title">User:</p>
        <select id="challenge" name="challenge">
          <option value="none">None</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </div>
  );
}

export default SearchFilters;