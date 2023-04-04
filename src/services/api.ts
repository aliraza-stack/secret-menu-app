const API_URL = 'http://localhost:3000/api/v1';

export interface Menus {
  id: number;
  menu_name: string;
  menu_description: string;
  restaurant_name: string;
}

interface NewMenuResponse {
  menu_name: string;
  menu_description: string;
  restaurant_name: string;
}

export async function getMenus() {
  const requestInfo = {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      }),
  };
  const response = await fetch(`${API_URL}/secret_menu_items`, requestInfo);
  const data = await response.json();
  console.log(data);
  return data;
}

export async function createMenu(payload: NewMenuResponse) {
  const requestInfo = {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      }),
    body: JSON.stringify(payload),
  };
  const response = await fetch(API_URL + "secret_menu_items", requestInfo);
  const data = await response.json();
  console.log(data);
  return data;
}