import React, {useState, useEffect} from 'react';
import { Modal, DatePicker} from 'antd';

function DateButton({item}){
  const [modalIsOpen, setModalIsOpen]= useState({visible:false});
  const [packDate, setPackDate]=useState(item.packDate);

  function showModal(){
    setModalIsOpen({visible:true});
  }

  function handleOk(e){
    setModalIsOpen({visible:false});
    console.log(e);
  }

  function handleCancel(e){
    setModalIsOpen({visible:false});
    console.log(e);
  }

  return(
  <div className="item-box">
    <button onClick={showModal}>{item.packBtn}</button>
    <Modal
      title="Marque uma data:"
      visible={modalIsOpen.visible}
      onOk={handleOk}
      onCancel={handleCancel}
      >
        <DatePicker placeholder={packDate} onChange={(date,dateString)=>setPackDate(dateString)} />
    </Modal>

  </div>
  )
}

export default DateButton;