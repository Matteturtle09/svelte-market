
import { writable } from 'svelte/store';

// @ts-ignore
const defaultValue = [];
// @ts-ignore
const initialValue = import.meta.env.SSR ? defaultValue : JSON.parse(window.localStorage.getItem('cart')) ?? defaultValue;

// @ts-ignore
const cart = writable(initialValue);

cart.subscribe((value) => {
  if (!import.meta.env.SSR) {
    // @ts-ignore
    window.localStorage.setItem('cart', JSON.stringify(value));
  }
});

// @ts-ignore
export default cart;