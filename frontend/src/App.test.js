import { render, screen } from '@testing-library/react';
import App from './App';

test('name', () => {
  render(<App />);
  const books = screen.getByText(/Jim Zuo , Jiahao Guo, Sicheng Zhou/i);
  expect(books).toBeInTheDocument();
});

test('Home Link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test('client title', () => {
  render(<App />);
  expect(screen.getByText("Software Engineering Practice Evidence Repository (SEPER)")).toBeInTheDocument();
});

test('Search article', () => {
  render(<App />);
  expect(screen.getByText(/Search article/i)).toBeInTheDocument();
});

test('Home', () => {
  render(<App />);
  const navElement = screen.getByText(/Home/i);
  expect(navElement).toBeInTheDocument();
});