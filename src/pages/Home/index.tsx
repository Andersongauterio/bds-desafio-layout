import { ReactComponent as CarHeader } from "assets/images/car-header.svg";
import ButtonCard from "components/ButtonCard";
import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-basecard-container">
        <div className="home-basecard-img">
          <CarHeader />
        </div>
        <div className="home-basecard-text">
          <h6>O carro perfeito para você</h6>
          <p>
            Conheça nossos carros e dê mais um passo na realização do seu sonho
          </p>
        </div>
      </div>
      <div className="home-buttoncard-container">
        <ButtonCard />
      </div>
    </div>
  );
};

export default Home;
