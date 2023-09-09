import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import App from "./App.tsx";

test('renders hello world', () => {
    render(<App/>);
    const textElement = screen.getByText(/hello world/i);
    expect(textElement).toBeInTheDocument();
});

test('sum is 3', () => {
    render(<App/>);
    const sumElement = screen.getByTitle('sum');
    expect(sumElement.textContent).toBe("3");
})
