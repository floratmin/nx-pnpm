import { render } from '@solidjs/testing-library';
import App from './App';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom'; // 👈 this is imported in order to use the jest-dom matchers
describe('App', () => {
  it('should render the app', () => {
    const { getByText } = render(() => <App/>);
    expect(getByText('Vite + Solid')).toBeInTheDocument();
    expect(1).toBe(1);
  });
});
