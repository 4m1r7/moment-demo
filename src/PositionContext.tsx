import React, { createContext, ReactNode, useContext, useState } from 'react';

interface Position {
  x: string;
  y: string;
  width: string;
  height: string;
  rotate: number;
  opacity: number;
}

interface stagePositions {
  logo: Position;
  line: Position;
  menu: Position;
  blue: Position;
  yellow: Position;
  green: Position;
  pink: Position;
}

interface PositionContextType {
  lastPosition: stagePositions | null;
  setLastPosition: (position: stagePositions | null) => void;
  homeMode: string;
  setHomeMode: (mode: string) => void;
}

const PositionContext = createContext<PositionContextType | undefined>(
  undefined
);

export const usePosition = () => {
  const context = useContext(PositionContext);
  if (!context) {
    throw new Error('usePosition must be used within a PositionProvider');
  }
  return context;
};

interface PositionProviderProps {
  children: ReactNode;
}

export const PositionProvider: React.FC<PositionProviderProps> = ({
  children,
}) => {
  const [lastPosition, setLastPosition] = useState<stagePositions | null>(null);
  const [homeMode, setHomeMode] = useState<string>('goInitial'); // can be 'goInitial', 'goDefault', 'goLanding'

  return (
    <PositionContext.Provider
      value={{ lastPosition, setLastPosition, homeMode, setHomeMode }}
    >
      {children}
    </PositionContext.Provider>
  );
};
