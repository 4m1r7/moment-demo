import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Shapes from '@/components/layout/Shapes';

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
interface LayoutProps {
  children: React.ReactNode;
  positions: stagePositions;
  initialPositions: stagePositions;
  brightHeader?: boolean;
  noFooter?: boolean;
  handleShapeClick: (shape: string) => void;
  handleLogoClick: () => void;
}

export default function Layout({
  children,
  positions,
  initialPositions,
  brightHeader,
  noFooter,
  handleShapeClick,
  handleLogoClick,
}: LayoutProps) {
  return (
    <>
      {children}
      <Shapes
        positions={positions}
        initialPositions={initialPositions}
        handleShapeClick={handleShapeClick}
      />
      <Header
        positions={positions}
        initialPositions={initialPositions}
        brightHeader={brightHeader}
        handleLogoClick={handleLogoClick}
      />
      {!noFooter && <Footer />}
    </>
  );
}
