import React, {useState} from 'react';
import { Select } from 'antd';



function Formulario({onSubmit}){

  const [packName, setPackName] = useState('');
  const [packType, setPackType] = useState('');
  const [packBtn, setPackBtn]= useState(1);

  const { Option } = Select;

  async function handleSubmit(e) {
    e.preventDefault();
    let itens = [];

    for(let i=1; i<=packBtn; i++){
      let item = {packDate:"01/01/2026",packBtn:i};
      itens.push(item); 
    }

    await onSubmit({
       packName,
       packType,
       packItem:itens
    });

    setPackName('');
    setPackType('');
    setPackBtn(1);
    itens = [];
}

  return(
      <aside className="formulario">
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <div className="input-block">
                <label htmlFor="packName">Nome do Pacote</label>
                <input
                  name="packName"
                  id="packName"
                  type="text"
                  required
                  value={packName}
                  onChange={e => setPackName(e.target.value)}
                />
              </div>

              <div className="input-block">
                <label htmlFor="packType">
                  Tipo do pacote
                  <Select  defaultValue={packType} name="packType" onChange={value=>setPackType(value)}>
                    <Option value="outros">Outros</Option>
                    <Option value="beleza">Beleza</Option>
                    <Option value="servicos">Serviços</Option>
                    <Option value="viagem">Viagens</Option>
                    <Option value="cinema">Cinema</Option>
                    <Option value="restaurantes">Restaurantes</Option>
                  </Select>
                </label>
              </div>
            </div>

            <div className="input-group">
              <div className="input-block">
                <label htmlFor="packQtd">Quantos itens?</label>
                <input
                  name="packQtd"
                  id="packQtd"
                  type="number"
                  min="1"
                  max="12"
                  required
                  value={packBtn}
                  onChange={e => setPackBtn(e.target.value)}
                />
              </div>
              <button type="submit">Criar</button>
            </div>
          </form>
        </aside>
    )}

  export default Formulario;
