import React, { useState} from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info,id }) => {
  const [showInfo, setShowInfo] = useState(false);
  
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn-question' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default Question;