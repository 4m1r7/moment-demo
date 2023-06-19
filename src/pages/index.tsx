import { motion } from 'framer-motion';
import * as React from 'react';
import { useState } from 'react';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

interface Position {
  x: string;
  y: string;
}

interface ShapePositions {
  red: Position;
  green: Position;
  blue: Position;
}

// Define a constant for the initial positions
const initialPositions: ShapePositions = {
  red: { x: '5vw', y: '4vh' },
  green: { x: '10vw', y: '10vh' },
  blue: { x: '13vw', y: '9vh' },
};

const shapePositions: { [key: string]: ShapePositions } = {
  red: {
    red: { x: '36vw', y: '7vh' },
    green: { x: '64vw', y: '1vh' },
    blue: { x: '88vw', y: '5vh' },
  },
  green: {
    red: { x: '73vw', y: '15vh' },
    green: { x: '100vw', y: '13vh' },
    blue: { x: '47vw', y: '17vh' },
  },
  blue: {
    red: { x: '15vw', y: '3vh' },
    green: { x: '58vw', y: '11vh' },
    blue: { x: '13vw', y: '9vh' },
  },
};

export default function HomePage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [positions, setPositions] = useState<any>(initialPositions);

  const handleShapeClick = (shape: string) => {
    setPositions(shapePositions[shape]);
  };

  // Create a function to render the shapes, this will help when adding more shapes
  const renderShape = (color: string) => (
    <motion.svg
      key={color}
      initial='initial'
      animate={positions[color]}
      width='100'
      height='100'
      style={{ position: 'absolute' }} // Use absolute positioning for the shapes
      onClick={() => handleShapeClick(color)}
    >
      fe
      <rect
        fill={color}
        width='100'
        height='100'
        style={{
          rotate: positions[color].rotate,
          scale: positions[color].scale,
        }}
      />
    </motion.svg>
  );

  const shapeColors = ['red', 'green', 'blue'];

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center text-center'>
            <div className='relative m-0 h-screen w-screen bg-red-200 p-0'>
              {shapeColors.map((color) => renderShape(color))}
            </div>

            <footer className='absolute bottom-2 text-gray-700'>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='mailto:taheri.amirhossein@gmail.com'>
                AmirT
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
