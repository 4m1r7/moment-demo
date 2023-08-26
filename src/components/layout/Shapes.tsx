import { motion } from 'framer-motion';
import * as React from 'react';

import Blue from '~/svg/blue-shape.svg';
import Green from '~/svg/green-shape.svg';
import Pink from '~/svg/pink-shape.svg';
import Yellow from '~/svg/yellow-shape.svg';

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
interface shapeProps {
  positions: stagePositions;
  initialPositions: stagePositions;
  handleShapeClick: (shape: string) => void;
}

export default function Shapes({
  positions,
  initialPositions,
  handleShapeClick,
}: shapeProps) {
  return (
    <div className='items-between pointer-events-none absolute top-0 z-0  flex h-screen w-full flex-col justify-center'>
      <motion.div
        className='pointer-events-auto absolute z-30 cursor-pointer self-center'
        style={{ filter: 'saturate(1100%) brightness(20%)' }}
        key='blue'
        initial={initialPositions.blue}
        animate={positions.blue}
        transition={{
          ease: 'easeInOut',
          duration: 1.5,
          // delay: .5,
        }}
        onClick={() => handleShapeClick('blue')}
      >
        <Blue className='h-full w-full' />
      </motion.div>

      <motion.div
        className='pointer-events-auto absolute z-30 cursor-pointer self-center opacity-0'
        style={{ filter: 'saturate(1100%) brightness(20%)' }}
        key='yellow'
        initial={initialPositions.yellow}
        animate={positions.yellow}
        transition={{
          ease: 'easeInOut',
          duration: 1.5,
          // delay: .5,
        }}
        onClick={() => handleShapeClick('yellow')}
      >
        <Yellow className='h-full w-full' />
      </motion.div>

      <motion.div
        className='pointer-events-auto absolute z-30 cursor-pointer self-center opacity-0'
        style={{ filter: 'saturate(1100%) brightness(20%)' }}
        key='green'
        initial={initialPositions.green}
        animate={positions.green}
        transition={{
          ease: 'easeInOut',
          duration: 1.5,
          // delay: .5,
        }}
        onClick={() => handleShapeClick('green')}
      >
        <Green className='h-full w-full' />
      </motion.div>

      <motion.div
        className='pointer-events-auto absolute z-30 cursor-pointer self-center opacity-0'
        style={{ filter: 'saturate(1100%) brightness(20%)' }}
        key='pink'
        initial={initialPositions.pink}
        animate={positions.pink}
        transition={{
          ease: 'easeInOut',
          duration: 1.5,
          // delay: .5,
        }}
        onClick={() => handleShapeClick('pink')}
      >
        <Pink className='h-full w-full' />
      </motion.div>
    </div>
  );
}
