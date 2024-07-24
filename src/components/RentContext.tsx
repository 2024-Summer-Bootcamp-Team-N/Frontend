import React, { createContext, useContext, useState, ReactNode } from 'react';

interface RentContextType {
  isMonthlyRentActive: boolean;
  isDepositRentActive: boolean;
  setIsMonthlyRentActive: (value: boolean) => void;
  setIsDepositRentActive: (value: boolean) => void;
}

const RentContext = createContext<RentContextType | undefined>(undefined);

export const RentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isMonthlyRentActive, setIsMonthlyRentActive] = useState(false);
  const [isDepositRentActive, setIsDepositRentActive] = useState(false);

  return (
    <RentContext.Provider
      value={{
        isMonthlyRentActive,
        isDepositRentActive,
        setIsMonthlyRentActive,
        setIsDepositRentActive,
      }}
    >
      {children}
    </RentContext.Provider>
  );
};

export const useRentContext = (): RentContextType => {
  const context = useContext(RentContext);
  if (!context) {
    throw new Error('useRentContext must be used within a RentProvider');
  }
  return context;
};
