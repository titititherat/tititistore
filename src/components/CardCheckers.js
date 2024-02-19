import CardDataCheckers from './CardDataCheckers'
import React, { useState } from 'react';
import './Card.css';

const CardListCheckers = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        {CardDataCheckers.map((card, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-12 my-3">
            <div className="card card-mobile align-items-center">
              <div className="card-content align-items-center">
                <div className="card-image-container">
                  <img className="card-image" src={card.image} alt="" />
                </div>
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text-desc">{card.desc}</p>

              <div className="card-line">
                <p className="icon">{card.icon} </p>
                <p className="card-text"> {card.cpmFree}</p>
              </div>

              <div className="card-line">
                <p className="icon">{card.icon} </p>
                <p className="card-text"> {card.cpmPago}</p>
              </div>

              <div className="card-line">
              <p className="card-text-price">{card.price1} <p className="card-text-price2"></p> </p>
              </div>

              <div className="card-line">
                <p className="card-text-price">{card.price2} <p className="card-text-price2"> </p> </p>
              </div>

              <div className="card-line">
              <p className="card-text-price">{card.price3} <p className="card-text-price2"> </p> </p>
              </div>

              <a
                className={`card-button ${hoveredButton === index ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredButton(index)}
                onMouseLeave={() => setHoveredButton(null)}
                href={card.link ? card.link : 'https://t.me/Tititiorato'} target='_blank' rel="noreferrer">
                Ver Infos/Comprar
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default CardListCheckers;