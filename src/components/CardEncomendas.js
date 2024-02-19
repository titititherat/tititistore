import React from 'react';
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import './CardEncomendas.css';

const CardEncomendas = () => {
  const items = [
    { id: 1, text: 'Login Valido ou um dado valido caso não seja um checker de login' },
    { id: 2, text: 'Link do site/App (se tiver os 2 manda dos 2, isso é muito importante!)' },
    { id: 3, text: 'Todos os detalhes da config, não deixe de explicar exatamente como você quer, como o que quer que puxe, etc. Pois só será feito o que for falado, não sou adivinhador' },
    { id: 4, text: 'Print de onde fica a informação que você quer que puxe, por exemplo, quer que puxe saldo, manda um print de onde que mostra o saldo no app/site' }
  ];

  return (
    <div className="container d-flex justify-content-center">
    <div className="card">
      <h2>Não deixe de tirar todas as dúvidas e explicar exatamente como você quer a ferramenta com todos os minimos detalhes, pois eu não adivinho nada e não será feito nada que não foi combinado, pois muitas vezes não entendo do trampo que você quer e o que você pode achar obvio não é, então sempre explique tudo em detalhes para não ter confusão, pois qualquer alteração será cobrada depois. Caso queira uma ferramenta privada avise antes de mandar qualquer info.</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <span className="icon-encomendas"><BsFillArrowRightSquareFill/></span>
            {item.text}
          </li>
        ))}
      </ul>
      <a className="card-button" href='https://t.me/Tititiorato' target='_blank' rel="noreferrer">Encomendar</a>
    </div>
    </div>
  );
};

export default CardEncomendas;