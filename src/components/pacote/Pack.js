import React, {useState} from 'react';
import DateButton from './DateButton';
import api from '../../services/api';

import esporte from '../../assets/esporte.png';
import beleza from '../../assets/beleza.png';
import restaurante from '../../assets/restaurante.png';
import servicos from '../../assets/servicos.png';
import viagem from '../../assets/viagens.png';
import cinema from '../../assets/cinema.png';
import outros from '../../assets/outros.png';
import 'antd/dist/antd.css';

function Pack({pack}){

  function image(type){
    if(type === "esporte"){  
      return esporte;
    }else if(type === "beleza"){
      return beleza;
    }else if(type === "restaurante"){
      return restaurante;
    }else if(type === "servicos"){
      return servicos;
    }else if(type === "viagem"){
      return viagem;
    }else if(type === "cinema"){
      return cinema;
    }else if(type === "outros"){
      return outros;
    }
  }

  async function handleUpdate(packData){
      const response = await api.put(`/${pack._id}`, packData);
      console.log(response);

  }

  return (
    <>
    <li  className="pack-item">
            <header>
              <img src={image(pack.packType)} alt=""></img>
              <strong>{pack.packName}</strong>
            </header>

            <main>
              {pack.packItem.map(item=>
                (<DateButton key={item._id} onOk={handleUpdate} item={item}/>)
              )} 
            </main>

          </li>
          </>
  );
}

export default Pack;