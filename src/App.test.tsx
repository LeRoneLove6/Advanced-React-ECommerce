import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';
import cartReducer from './features/cart/cartSlice';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Mock Axios to prevent real API calls
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: [] })),
}));


jest.mock('./api/products');

// Create Redux store
const store = configureStore({
  reducer: { cart: cartReducer },
});

// Create React Query client
const queryClient = new QueryClient();

describe('App Component', () => {
  test('renders navigation links', () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <MemoryRouter>
            <App />
          </MemoryRouter>
        </QueryClientProvider>
      </Provider>
    );

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Cart/i)).toBeInTheDocument();
  });

  test('renders Home page content', async () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <MemoryRouter initialEntries={['/']}>
            <App />
          </MemoryRouter>
        </QueryClientProvider>
      </Provider>
    );

    await waitFor(() => {
      expect(screen.getByText(/Product Catalog/i)).toBeInTheDocument();
    });
  });

  test('renders Cart page content', () => {
    render(
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <MemoryRouter initialEntries={['/cart']}>
            <App />
          </MemoryRouter>
        </QueryClientProvider>
      </Provider>
    );

    expect(screen.getByText(/Your Shopping Cart/i)).toBeInTheDocument();
  });
});

