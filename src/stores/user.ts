/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

type User = {
  id: number;
  name: string;
  email: string;
};

type UserStore = {
  token: string | null;
  email: string | null;
  name: string | null;
  getUser: () => null | User;
  setToken: (token: string | null) => void;
  isSignedIn: () => boolean;
  logout: () => void;
  getBasket: () => Array<number> | [];
  basket: Array<number>;
  addToBasket: (productId: number) => void;
  setBasket: (Basket: Array<number>) => void;
};

const useUserStore = create<UserStore>((set, get) => ({
  token: localStorage.getItem("token") || null,
  getUser: () => null,
  email: null,
  name: null,
  setToken: (token: string | null) => {
    set({ token: token });
    localStorage.setItem("token", String(token));
  },
  logout: () => {
    set({ token: null });
    localStorage.removeItem("token");
  },
  isSignedIn: () => {
    return !!get().token;
  },
  basket: [],
  addToBasket: (productId: number) => {
    get().basket?.push(productId);
  },
  getBasket: () => {
    return get().basket;
  },
  setBasket: (basket: Array<number>) => {
    set({ basket: basket });
  }
}));

export default useUserStore;
