const SearchBar = ({handleSearch}) => {
  return(
    <div className="pa2">
      <input 
        className="pa3 ba b--green bg-lightest-blue"
        type='text' 
        onChange={handleSearch} 
      />
    </div>
  );
}

export default SearchBar;