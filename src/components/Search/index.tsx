import "./styles.css";

const Search = () => {
  return (
    <div className="search-container">
      <div className="search-container-input">
            <input className="form-control" type="text" />
      </div>
        <button className="btn btn-primary">
            <h6>Buscar</h6>
        </button>
    </div>
  );
};

export default Search;
