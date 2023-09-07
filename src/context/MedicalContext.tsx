import React, { createContext } from 'react';

const MedicalContext = createContext<any>(null);
interface MedicalProps {
  children: React.ReactNode;
}

const MedicalProvider = ({ children }: MedicalProps) => {

  return (
    <MedicalContext.Provider value={{}}>
      {children}
    </MedicalContext.Provider>
  );
};

export { MedicalContext, MedicalProvider };
