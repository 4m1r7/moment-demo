import { motion } from 'framer-motion';
import * as React from 'react';
import { useState } from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import Blue from '~/svg/blue-shape.svg';
import Green from '~/svg/green-shape.svg';
import Logo from '~/svg/logo.svg';
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
  header: Position;
  blue: Position;
  yellow: Position;
  green: Position;
  pink: Position;
}

const stagePositions: { [key: string]: stagePositions } = {
  firstPositions: {
    header: {
      x: '0vw',
      y: '0vh',
      width: '65%',
      height: 'fit-content',
      opacity: 1,
      rotate: 0,
    },
    blue: {
      x: '3vw',
      y: '2vh',
      width: '17vw',
      height: '17vw',
      opacity: 0.4,
      rotate: 0,
    },
    yellow: {
      x: '0vw',
      y: '-6vh',
      width: '12.5vw',
      height: '12.5vw',
      opacity: 0.4,
      rotate: 0,
    },
    green: {
      x: '-4vw',
      y: '6vh',
      width: '14vw',
      height: '14vw',
      opacity: 0.4,
      rotate: 0,
    },
    pink: {
      x: '-5vw',
      y: '-7vh',
      width: '14vw',
      height: '14vw',
      opacity: 0.4,
      rotate: 0,
    },
  },
  defaultPositions: {
    header: {
      x: '0vw',
      y: '0vh',
      width: '100%',
      height: 'fit-content',
      opacity: 1,
      rotate: 0,
    },
    blue: {
      x: '26vw',
      y: '-11vh',
      width: '24vw',
      height: '24vw',
      opacity: 0.4,
      rotate: 6,
    },
    yellow: {
      x: '-24vw',
      y: '14vh',
      width: '19vw',
      height: '19vw',
      opacity: 0.4,
      rotate: -40,
    },
    green: {
      x: '5vw',
      y: '23vh',
      width: '18vw',
      height: '18vw',
      opacity: 0.4,
      rotate: 160,
    },
    pink: {
      x: '-11vw',
      y: '-14vh',
      width: '22vw',
      height: '22vw',
      opacity: 0.4,
      rotate: -18,
    },
  },
  blue: {
    header: {
      x: '0vw',
      y: '75vh',
      width: '65%',
      height: 'fit-content',
      opacity: 1,
      rotate: 0,
    },
    blue: {
      x: '14vw',
      y: '8vh',
      width: '58vw',
      height: '58vw',
      opacity: 0.4,
      rotate: -130,
    },
    yellow: {
      x: '-38vw',
      y: '-30vh',
      width: '12.5vw',
      height: '12.5vw',
      opacity: 0.4,
      rotate: 0,
    },
    green: {
      x: '-24vw',
      y: '-23vh',
      width: '23vw',
      height: '23vw',
      opacity: 0.4,
      rotate: 0,
    },
    pink: {
      x: '-23vw',
      y: '-3vh',
      width: '30.5vw',
      height: '30.5vw',
      opacity: 0.4,
      rotate: -75,
    },
  },
  yellow: {
    header: {
      x: '0vw',
      y: '0vh',
      width: '65%',
      height: 'fit-content',
      opacity: 1,
      rotate: 0,
    },
    blue: {
      x: '39vw',
      y: '-25vh',
      width: '12vw',
      height: '12vw',
      opacity: 0.4,
      rotate: 150,
    },
    yellow: {
      x: '-23vw',
      y: '5vh',
      width: '43vw',
      height: '43vw',
      opacity: 0.4,
      rotate: -20,
    },
    green: {
      x: '34vw',
      y: '-9vh',
      width: '18vw',
      height: '18vw',
      opacity: 0.4,
      rotate: 180,
    },
    pink: {
      x: '25vw',
      y: '-20vh',
      width: '21vw',
      height: '21vw',
      opacity: 0.4,
      rotate: -60,
    },
  },
  green: {
    header: {
      x: '0vw',
      y: '0vh',
      width: '100%',
      height: 'fit-content',
      opacity: 1,
      rotate: 0,
    },
    blue: {
      x: '38vw',
      y: '-20vh',
      width: '12vw',
      height: '12vw',
      opacity: 0.4,
      rotate: 185,
    },
    yellow: {
      x: '38vw',
      y: '26vh',
      width: '13vw',
      height: '13vw',
      opacity: 0.4,
      rotate: -10,
    },
    green: {
      x: '15vw',
      y: '3vh',
      width: '51vw',
      height: '51vw',
      opacity: 0.4,
      rotate: 55,
    },
    pink: {
      x: '-14vw',
      y: '8vh',
      width: '21vw',
      height: '21vw',
      opacity: 0.4,
      rotate: -20,
    },
  },
  pink: {
    header: {
      x: '0vw',
      y: '0vh',
      width: '65%',
      height: 'fit-content',
      opacity: 1,
      rotate: 0,
    },
    blue: {
      x: '32vw',
      y: '16vh',
      width: '15vw',
      height: '15vw',
      opacity: 0.4,
      rotate: 45,
    },
    yellow: {
      x: '-36vw',
      y: '-20vh',
      width: '11.5vw',
      height: '11.5vw',
      opacity: 0.4,
      rotate: 30,
    },
    green: {
      x: '19vw',
      y: '27vh',
      width: '12vw',
      height: '12vw',
      opacity: 0.4,
      rotate: 160,
    },
    pink: {
      x: '10vw',
      y: '-2vh',
      width: '59vw',
      height: '59vw',
      opacity: 0.4,
      rotate: -70,
    },
  },
};

interface stageStyles {
  element: string;
}

const stageStyles: { [key: string]: stageStyles } = {
  firstPositions: {
    element: ' ',
  },
  defaultPositions: {
    element: ' ',
  },
  blue: {
    element: ' ',
  },
  yellow: {
    element: ' ',
  },
  green: {
    element: ' ',
  },
  pink: {
    element: ' ',
  },
};

export default function HomePage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [positions, setPositions] = useState<any>(
    stagePositions['firstPositions']
  );
  // TODO - remove no-unused-vars below when use implemented
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, unused-imports/no-unused-vars
  const [styles, setStyles] = useState<any>(stageStyles['firstPositions']);

  const [showDefaultMode, setShowDefaultMode] = useState(true);

  const handleShapeClick = (shape: string) => {
    if (showDefaultMode) {
      setPositions(stagePositions['defaultPositions']);
      setStyles(stageStyles['defaultPositions']);
      setShowDefaultMode(false);
    } else if (positions === stagePositions[shape]) {
      setPositions(stagePositions['defaultPositions']);
      setStyles(stageStyles['defaultPositions']);
    } else {
      setPositions(stagePositions[shape]);
      setStyles(stageStyles[shape]);
    }
  };

  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout relative flex min-h-screen flex-col items-center justify-center text-center '>
            {/* Header container */}
            <motion.div
              className=' absolute left-0 top-0 flex items-center justify-start gap-24 p-28 '
              style={{}}
              key='header'
              initial={{ y: '-10vw', width: '65%', height: 'fit-content' }}
              animate={positions.header}
              transition={{
                ease: 'easeInOut',
                duration: 1.5,
                // delay: .5,
              }}
            >
              <Logo className='absolute h-[3vw] w-[18vw]' />

              <hr className={` ml-[28rem] h-[3rem] w-[.2rem] bg-gray-400`} />

              <ul className=' flex h-full w-full items-center justify-between '>
                <li className=' text-4xl font-thin text-gray-500 '>Projects</li>
                <li className=' text-4xl font-thin text-gray-500 '>About</li>
                <li className=' text-4xl font-thin text-gray-500 '>Contact</li>
              </ul>
            </motion.div>

            {/* Shapes container */}
            <div className='items-between absolute flex h-screen w-[80vw] flex-col justify-center'>
              <motion.div
                className='absolute self-center opacity-0'
                style={{ filter: 'saturate(1100%) brightness(20%)' }}
                key='blue'
                initial={{ x: '28vw' }}
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
                className='absolute self-center opacity-0'
                style={{ filter: 'saturate(1100%) brightness(20%)' }}
                key='yellow'
                initial={{ x: '8vw' }}
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
                className='absolute self-center opacity-0'
                style={{ filter: 'saturate(1100%) brightness(20%)' }}
                key='green'
                initial={{ x: '-8vw' }}
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
                className='absolute self-center opacity-0'
                style={{ filter: 'saturate(1100%) brightness(20%)' }}
                key='pink'
                initial={{ x: '-28vw' }}
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
          </div>
        </section>
      </main>
    </Layout>
  );
}
