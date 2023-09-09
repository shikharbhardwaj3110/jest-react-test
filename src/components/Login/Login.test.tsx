import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Login from "./Login";

test('username input renders correctly', () => {
    render(<Login/>);
    const usernameInput : HTMLElement= screen.getByPlaceholderText('username');
    expect(usernameInput).toBeInTheDocument();
});

test('password input renders correctly', () => {
    render(<Login/>);
    const passwordInput : HTMLElement = screen.getByPlaceholderText('password');
    expect(passwordInput).toBeInTheDocument();
});

test('submit button renders correctly', () => {
    render(<Login/>);
    const submitButton : HTMLElement = screen.getByTitle('submitBtn');
    expect(submitButton).toBeInTheDocument();
});

test('username input is empty', () => {
    render(<Login/>);
    const usernameInput : HTMLInputElement = screen.getByPlaceholderText('username');
    expect(usernameInput.value).toBe('');
});

test('password input is empty', () => {
    render(<Login/>);
    const passwordInput : HTMLInputElement = screen.getByPlaceholderText('password');
    expect(passwordInput.value).toBe('');
});

test('submit button gets disabled after clicking', () => {
    render(<Login/>);
    const submitBtn : HTMLElement = screen.getByTitle('submitBtn');
    expect(submitBtn).not.toBeDisabled();
    fireEvent.click(submitBtn);
    expect(submitBtn).toBeDisabled();
});

test('submit button gets enabled after api response', () => {
    render(<Login/>);
    const submitBtn : HTMLElement = screen.getByTitle('submitBtn');
    fireEvent.click(submitBtn);
    
})

