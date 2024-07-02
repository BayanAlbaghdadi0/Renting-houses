import  { createContext, useState } from "react";

export const ApartmentContext = createContext();

export const ApartmentProvider = ({ children }) => {
  const [apartmentData, setApartmentData] = useState(null);

  return (
    <ApartmentContext.Provider value={{ apartmentData, setApartmentData }}>
      {children}
    </ApartmentContext.Provider>
  );
};

