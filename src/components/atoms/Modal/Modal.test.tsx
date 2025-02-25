import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal Component", () => {
  const defaultProps = {
    open: true,
    title: "Test Title",
    description: "Test Description",
    onClose: jest.fn(),
    onConfirm: jest.fn(),
    confirmText: "Confirm",
    cancelText: "Cancel",
  };

  it("renders the modal with the correct title and description", () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", () => {
    render(<Modal {...defaultProps} />);
    fireEvent.click(screen.getByLabelText("close"));
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it("calls onClose when the cancel button is clicked", () => {
    render(<Modal {...defaultProps} />);
    fireEvent.click(screen.getByText("Cancel"));
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it("calls onConfirm when the confirm button is clicked", () => {
    render(<Modal {...defaultProps} />);
    fireEvent.click(screen.getByText("Confirm"));
    expect(defaultProps.onConfirm).toHaveBeenCalled();
  });

  it("does not render the confirm button if onConfirm is not provided", () => {
    const { queryByText } = render(<Modal {...defaultProps} onConfirm={undefined} />);
    expect(queryByText("Confirm")).toBeNull();
  });

  it("renders the confirm button with default text", () => {
    render(<Modal {...defaultProps} confirmText={undefined} />);
    expect(screen.getByText("agree")).toBeInTheDocument();
  });

  it("renders the cancel button with default text", () => {
    render(<Modal {...defaultProps} cancelText={undefined} />);
    expect(screen.getByText("disagree")).toBeInTheDocument();
  });
});
