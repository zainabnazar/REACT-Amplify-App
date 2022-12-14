import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';



test('Should have the correct text', async () => {
  render(<App />);
  const myApp = await screen.findByText('React App Using Amplify');
  expect(myApp).toBeVisible();
});

test('We get 200 status when we make the GET call', async () => {
  let response = await fetch("https://0tipw7uf5j.execute-api.eu-west-2.amazonaws.com/dev/items/mobile");
  expect(response.status).toBe(200);

})

test("Get 4XX status when we are not passing the item in the request", async () => {
  let response = await fetch("https://0tipw7uf5j.execute-api.eu-west-2.amazonaws.com/dev/items/");
  expect(response.status).toBe(403);
})


test('displays Response on screen when click "Get Item from backend" button', async () => {

  render(<App />);
  const button = screen.getByText("Get Item from backend");
  fireEvent.click(button);
  await waitFor(() => {
    expect(screen.getByText("Response")).toBeInTheDocument();
  });
})
