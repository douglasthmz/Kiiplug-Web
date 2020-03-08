import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { Container, PackList, PackHeader, PackInfos } from './styles';

import beleza from '../../assets/images/beleza.png';

export default function Home() {
  return (
    <>
      <form>
        <Container>
          <div>
            <label htmlFor="pack-name">Nome do pacote:</label>
            <input type="text" id="pack-name" />
          </div>

          <div>
            <label htmlFor="item-qtd">Quantidade de itens:</label>
            <input type="number" defaultValue={1} id="item-qtd" />
          </div>
          <div>
            <label htmlFor="pack-tipo">Tipo do pacote:</label>
            <select name="Tipo do pacote" id="pack-tipo">
              <option value="beleza">Beleza</option>
              <option value="cinema">Cinema</option>
              <option value="esporte">Esporte</option>
              <option value="outros">Outros</option>
              <option value="restaurante">Restaurante</option>
              <option value="servicos">Serviços</option>
              <option value="viagens">Viagens</option>
            </select>
          </div>

          <div>
            <button type="submit">Criar</button>
          </div>
        </Container>
      </form>
      <PackList>
        <li>
          <PackHeader>
            <div>
              <img src={beleza} alt="beleza" />
              <h1>Nome do pacote</h1>
            </div>
            <button type="button">
              <IoMdCloseCircleOutline size={33} color="#ebf3ea" />
            </button>
          </PackHeader>
          <PackInfos>
            <div>
              <span>Quantidade de itens: 8</span>
              <span>Data de criação: 20/09/2019</span>
            </div>
            <div>
              <span>Itens usados: 3/8</span>
              <span>Ultimo uso: 27/09/2019</span>
            </div>
            <div>
              <Link to="/product">
                <button type="button">Detalhes</button>
              </Link>
            </div>
          </PackInfos>
        </li>
      </PackList>
    </>
  );
}
