import React from 'react';

export default function Modal({ imgUrl, onClose }) {
  return (
    <div className='modal-overlay'>
   
      <div className="modal-img">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={imgUrl} alt="Image en grand format" />
      
    </div>
    </div>
  );
}
