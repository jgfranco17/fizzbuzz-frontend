// src/components/ResultModal.tsx
import React from 'react';

interface Props {
  result: string;
  onClose: () => void;
}

const ResultModal: React.FC<Props> = ({ result, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h3>FizzBuzz Sequence:</h3>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default ResultModal;
