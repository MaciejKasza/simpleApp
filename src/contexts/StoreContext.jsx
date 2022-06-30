import { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export function useStore() {
  return useContext(StoreContext);
}

export function StoreProvider({ children }) {
  const [user, setUser] = useState();
  const [products, setProducts] = useState(null);

  const value = { user, setUser, products, setProducts };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
}
