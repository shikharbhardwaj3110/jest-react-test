import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "./App.tsx";

test('renders hello world', () => {
    render(<App/>);
    const textElement = screen.getByText(/hello world/i);
    expect(textElement).toBeInTheDocument();
})
