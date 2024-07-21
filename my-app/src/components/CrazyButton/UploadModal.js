import React from 'react';
import './UploadModal.css';

const UploadModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
 
    return (
        <div className="modal-overlay">
            <div className="modal">
                    {children}
            </div>
        </div>
  );
}

export default UploadModal;
