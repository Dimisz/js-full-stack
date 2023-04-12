const SearchBar = ({handleSearch}) => {
  return(
    <>
      <input type='text' onChange={handleSearch} />
    </>
  );
}

export default SearchBar;