import React from 'react';

export const SectionContext = React.createContext();

export const SectionContextProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = React.useState(1);

  return (
    <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </SectionContext.Provider>
  );
};
