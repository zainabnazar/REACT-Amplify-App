import { render, screen } from '@testing-library/react';
import App from './App';


test('Should have the correct text', async () => {
  render(<App />);
  const myApp = await screen.findByText('React App Using Amplify');
  expect(myApp).toBeVisible();
});