import CardDataAulas from './CardDataAulas'
import React, { useState } from 'react';
import './CardAulas.css';

const CardListAulas = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        {CardDataAulas.map((card, index) => (
          <div key={index} className="card-deck d-flex align-items-center justify-content-center mx-1 my-2 flex-column">
            <div className="card-aulas card-mobile align-items-center">
              <div className="card-content align-items-center">
                <div className="card-image-container-aulas">
                  <img className="card-image-aulas" src={card.image} alt="" />
                </div>
              </div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text-desc">{card.desc}</p>

             {/*  <div className="card-line">
                <p className="icon">{card.icon} </p>
                <p className="card-text"> {card.cpmFree}</p>
              </div>

              <div className="card-line">
                <p className="icon">{card.icon} </p>
                <p className="card-text"> {card.cpmPago}</p>
              </div>

               <div className="card-line">
              <p className="card-text-price">{card.price1} <p className="card-text-price2"> 3 Dias</p> </p>
              </div>

              <div className="card-line">
                <p className="card-text-price">{card.price2} <p className="card-text-price2"> 14 Dias</p> </p>
              </div>

              <div className="card-line">
              <p className="card-text-price">{card.price3} <p className="card-text-price2"> Vitalicio</p> </p>
              </div>  */}

              <a
                className={`card-button ${hoveredButton === index ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredButton(index)}
                onMouseLeave={() => setHoveredButton(null)}
                href={card.link ? card.link : 'https://t.me/Tititiorato'} target='_blank' rel="noreferrer">
                Assistir
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default CardListAulas;