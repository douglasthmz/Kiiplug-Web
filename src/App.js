import React, { useState, useEffect } from 'react';

import Formulario from './components/formulario';
import api from './services/api';
import Pack from './components/pacote/Pack';

import 'antd/dist/antd.css';
import './App.css';
import './sidebar.css';
import './main.css';



function App() {
  const [packs, setPacks] = useState([]);
  
  useEffect(()=>{
    async function loadPacks(){
      const res = await api.get('/');
      setPacks(res.data);
      console.log(res.data);
    }
    loadPacks();
  }, [])
  

  async function handleAddDev(data){
    console.log(data);
    const response = await api.post('/', data)
    console.log(response);

    setPacks([...packs, response.data]);
  }

  return (
    <div id="App">
      <Formulario onSubmit={handleAddDev}/>

      
      <main className="pacotes">
        <ul>
          {packs.map(pack=>(
            <Pack key={pack._id} pack={pack}/>
          ))}
          
        </ul>
      </main>
    </div>
  );
}

export default App;
