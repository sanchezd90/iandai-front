import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    closeButton?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, closeButton }) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                {closeButton ? closeButton : (
                    <button className="modal-close-button" onClick={onClose}>
                        X
                    </button>
                )}
                {children}
            </div>
        </div>
    );
};

export default Modal;
