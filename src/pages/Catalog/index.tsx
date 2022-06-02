import CarCard from "components/CarCard";
import Search from "components/Search";
import "./styles.css";

const Catalog = () => {
  return (
    <>
      <div className="catalog-container">
        <Search />
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CarCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3">
            <CarCard />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Catalog;
