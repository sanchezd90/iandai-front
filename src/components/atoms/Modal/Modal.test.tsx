import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Modal from './Modal';
import IconButton from '../../atoms/IconButton/IconButton';
import CloseIcon from '@mui/icons-material/Close';

describe('Modal Component', () => {
    it('should not render when isOpen is false', () => {
        const { queryByText } = render(
            <Modal isOpen={false} onClose={() => {}}>
                <div>Modal Content</div>
            </Modal>
        );
        expect(queryByText('Modal Content')).toBeNull();
    });

    it('should render when isOpen is true', () => {
        const { getByText } = render(
            <Modal isOpen={true} onClose={() => {}}>
                <div>Modal Content</div>
            </Modal>
        );
        expect(getByText('Modal Content')).toBeInTheDocument();
    });

    it('should call onClose when close button is clicked', () => {
        const onCloseMock = jest.fn();
        const { getByText } = render(
            <Modal isOpen={true} onClose={onCloseMock}>
                <div>Modal Content</div>
            </Modal>
        );
        fireEvent.click(getByText('X'));
        expect(onCloseMock).toHaveBeenCalledTimes(1);
    });

    it('should call onClose when clicking on the overlay', () => {
        const onCloseMock = jest.fn();
        const { getByText } = render(
            <Modal isOpen={true} onClose={onCloseMock}>
                <div>Modal Content</div>
            </Modal>
        );
        fireEvent.click(getByText('Modal Content').parentElement!.parentElement!);
        expect(onCloseMock).toHaveBeenCalledTimes(1);
    });

    it('should not call onClose when clicking inside the modal content', () => {
        const onCloseMock = jest.fn();
        const { getByText } = render(
            <Modal isOpen={true} onClose={onCloseMock}>
                <div>Modal Content</div>
            </Modal>
        );
        fireEvent.click(getByText('Modal Content'));
        expect(onCloseMock).not.toHaveBeenCalled();
    });

    it('should render the custom closeButton when provided', () => {
        const { getByTestId } = render(
            <Modal 
                isOpen={true} 
                onClose={() => {}} 
                closeButton={<IconButton onClick={() => {}} icon={CloseIcon} />}
            >
                <div>Modal Content</div>
            </Modal>
        );
        expect(getByTestId('icon-button')).toBeInTheDocument();
    });

    it('should render the default close button when no custom button is provided', () => {
        const { getByText } = render(
            <Modal 
                isOpen={true} 
                onClose={() => {}} 
            >
                <div>Modal Content</div>
            </Modal>
        );
        expect(getByText('X')).toBeInTheDocument();
    });
});
