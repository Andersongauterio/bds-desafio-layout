import "./styles.css";

import CarImg from "assets/images/car-card.png";

const CarCard = () => {
  return (
    <div className="base-card car-card">
      <div className="card-top-container">
        <img src={CarImg} alt="Carro" />
      </div>
      <div className="card-bottom-container">
        <h6>Audi Supra TT</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, nisi</p>
        <button className="btn btn-primary">COMPRAR</button>
      </div>
    </div>
  );
};

export default CarCard;
