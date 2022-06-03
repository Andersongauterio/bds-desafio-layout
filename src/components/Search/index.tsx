import "./styles.css";

const Search = () => {
  return (
    <div className="search-container">
      <div className="search-container-input">
        <input className="form-control" name="search" id="search" placeholder="Digite sua busca" type="text" />
      </div>
      <div className="search-button">
        <button className="btn btn-primary">
          <h6>Buscar</h6>
        </button>
      </div>
    </div>
  );
};

export default Search;
