import { motion } from 'framer-motion';
import * as React from 'react';
import { useEffect, useState } from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { usePosition } from '@/PositionContext';

import Asterisk from '~/svg/asterisk.svg';

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

const initialPositions: stagePositions = {
  logo: {
    x: '6vw',
    y: '-10vh',
    width: '18vw',
    height: 'fit-content',
    opacity: 0,
    rotate: 0,
  },
  line: {
    x: '13vw',
    y: '-10vh',
    width: '1vw',
    height: '3.5rem',
    opacity: 0,
    rotate: 0,
  },
  menu: {
    x: '18vw',
    y: '-10vh',
    width: '42vw',
    height: 'fit-content',
    opacity: 0,
    rotate: 0,
  },
  blue: {
    x: 'calc( -50vw + 9.2rem )',
    y: 'calc( -60vh + 8.2rem )',
    width: '2.5vw',
    height: '2.5vw',
    opacity: 0,
    rotate: -360,
  },
  yellow: {
    x: 'calc( -50vw + 8rem )',
    y: 'calc( -60vh + 8rem )',
    width: '2vw',
    height: '2vw',
    opacity: 0,
    rotate: -340,
  },
  green: {
    x: 'calc( -50vw + 9.2rem )',
    y: 'calc( -60vh + 9.3rem )',
    width: '2.3vw',
    height: '2.3vw',
    opacity: 0,
    rotate: -80,
  },
  pink: {
    x: 'calc( -50vw + 7.8rem )',
    y: 'calc( -60vh + 8.8rem )',
    width: '2.3vw',
    height: '2.3vw',
    opacity: 0,
    rotate: 410,
  },
};

const stagePositions: { [key: string]: stagePositions } = {
  firstPositions: {
    logo: {
      x: '6vw',
      y: '0vh',
      width: '18vw',
      height: 'fit-content',
      opacity: 1,
      rotate: 0,
    },
    line: {
      x: '13vw',
      y: '0vh',
      width: '1vw',
      height: '3.5rem',
      opacity: 1,
      rotate: 0,
    },
    menu: {
      x: '18vw',
      y: '0vh',
      width: '42vw',
      height: 'fit-content',
      opacity: 1,
      rotate: 0,
    },
    blue: {
      x: 'calc( -50vw + 9rem )',
      y: 'calc( -50vh + 8.5rem )',
      width: '2.5vw',
      height: '2.5vw',
      opacity: 0.4,
      rotate: -50,
    },
    yellow: {
      x: 'calc( -50vw + 7.8rem )',
      y: 'calc( -50vh + 8.3rem )',
      width: '2vw',
      height: '2vw',
      opacity: 0.4,
      rotate: -90,
    },
    green: {
      x: 'calc( -50vw + 9rem )',
      y: 'calc( -50vh + 9.5rem )',
      width: '2.3vw',
      height: '2.3vw',
      opacity: 0.4,
      rotate: 270,
    },
    pink: {
      x: 'calc( -50vw + 8.1rem )',
      y: 'calc( -50vh + 9.2rem )',
      width: '2.3vw',
      height: '2.3vw',
      opacity: 0.4,
      rotate: 280,
    },
  },
  defaultPositions: {
    logo: {
      x: '0vw',
      y: '0vh',
      width: '18vw',
      height: 'fit-content',
      opacity: 1,
      rotate: 0,
    },
    line: {
      x: '0vw',
      y: '0vh',
      width: '17vw',
      height: '3.5rem',
      opacity: 1,
      rotate: 0,
    },
    menu: {
      x: '0vw',
      y: '0vh',
      width: '45vw',
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
    logo: {
      x: '0vw',
      y: 'calc(75vh - 15.8rem)',
      width: '18vw',
      height: 'fit-content',
      opacity: 1,
      rotate: 0,
    },
    line: {
      x: '-9vw',
      y: 'calc(75vh - 20rem)',
      width: '1vw',
      height: '35rem',
      opacity: 1,
      rotate: 90,
    },
    menu: {
      x: '-28.4vw',
      y: 'calc(75vh - 23.5rem)',
      width: '28.2vw',
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
    logo: {
      x: '0vw',
      y: '0vh',
      width: '18vw',
      height: 'fit-content',
      opacity: 1,
      rotate: 0,
    },
    line: {
      x: '0vw',
      y: '0vh',
      width: '1vw',
      height: '3rem',
      opacity: 1,
      rotate: 0,
    },
    menu: {
      x: '0vw',
      y: '0vh',
      width: '52vw',
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
    logo: {
      x: '0vw',
      y: '-15.8rem',
      width: '18vw',
      height: 'fit-content',
      opacity: 1,
      rotate: 0,
    },
    line: {
      x: '-9vw',
      y: '-11.4rem',
      width: '1vw',
      height: '35rem',
      opacity: 1,
      rotate: 90,
    },
    menu: {
      x: '-28.4vw',
      y: '-8rem',
      width: '28.2vw',
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
    logo: {
      x: '0vw',
      y: '0vh',
      width: '18vw',
      height: 'fit-content',
      opacity: 1,
      rotate: 0,
    },
    line: {
      x: '0vw',
      y: '0vh',
      width: '.1vw',
      height: '3rem',
      opacity: 1,
      rotate: 0,
    },
    menu: {
      x: '0vw',
      y: '0vh',
      width: '25vw',
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

const mainComponent = {
  hidden: { opacity: 0, x: -100, y: 0 },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { ease: 'easeOut', duration: 1.5 },
  },
  exit: {
    opacity: 0,
    x: 100,
    y: 0,
    transition: { ease: 'easeOut', duration: 0.5 },
  },
};

export default function About() {
  const { lastPosition, setLastPosition } = usePosition();

  const dynamicInitials = lastPosition ? lastPosition : initialPositions;

  const [positions, setPositions] = useState<stagePositions>(
    stagePositions['firstPositions']
  );

  const [result, setResult] = useState('');

  useEffect(() => {
    setLastPosition(positions);
  }, [positions, setLastPosition]);

  const handleShapeClick = (shape: string) => {
    if (positions === stagePositions[shape]) {
      setPositions(stagePositions['defaultPositions']);
      setStyles(stageStyles['defaultPositions']);
    } else {
      setPositions(stagePositions[shape]);
      setStyles(stageStyles[shape]);
    }
  };

  const handleSubmit = async (event: {
    preventDefault: () => void;
    target: HTMLFormElement | undefined;
  }) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);

    formData.append('access_key', 'c6b542e4-bc5d-4ec0-ad2f-95b4623a58f1');

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      // console.log("Success", res);
      setResult(res.message);
    } else {
      // console.log("Error", res);
      setResult(res.message);
    }
  };

  // TODO - remove no-unused-vars below when use implemented
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, unused-imports/no-unused-vars
  const [styles, setStyles] = useState<stageStyles>(
    stageStyles['firstPositions']
  );

  return (
    <Layout
      positions={positions}
      initialPositions={dynamicInitials}
      handleShapeClick={handleShapeClick}
    >
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className=' pointer-events-none relative flex min-h-screen w-full flex-col items-center justify-start bg-transparent text-center'>
          <motion.div
            className='pointer-events-auto flex w-full flex-col gap-28 bg-transparent px-32 pb-28 pt-80'
            style={{}}
            key='contact-page'
            variants={mainComponent}
            initial='hidden'
            animate='enter'
            exit='exit'
            transition={{
              ease: 'easeOut',
              duration: 1,
              delay: 1,
            }}
          >
            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className='flex w-full justify-between gap-48 text-left'
            >
              <div className='flex w-1/3 flex-col gap-12'>
                {/* TODO create proper submit results window */}
                <p>{result}</p>

                <div className='flex w-full flex-col'>
                  <label
                    htmlFor='name'
                    className='w-fit border-b border-neutral-400 pb-5 text-4xl font-semibold text-neutral-500'
                  >
                    Name
                  </label>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    className='h-36 border-0 border-b border-neutral-500 text-3xl text-gray-500 focus:border-neutral-500 focus:ring-0'
                  />
                </div>

                <div className='flex w-full flex-col'>
                  <label
                    htmlFor='email'
                    className='w-fit  border-b border-neutral-400 pb-5 text-4xl font-semibold text-neutral-500'
                  >
                    Email
                  </label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    className='h-36 border-0 border-b border-neutral-500 text-3xl text-gray-500 focus:border-neutral-500 focus:ring-0'
                  />
                </div>

                <div className='flex w-full flex-col'>
                  <label
                    htmlFor='location'
                    className='w-fit  border-b border-neutral-400 pb-5 text-4xl font-semibold text-neutral-500'
                  >
                    Location
                  </label>
                  <input
                    id='location'
                    name='location'
                    type='text'
                    className='h-36 border-0 border-b border-neutral-500 text-3xl text-gray-500 focus:border-neutral-500 focus:ring-0'
                  />
                </div>
              </div>

              <div className='flex w-2/3 flex-col'>
                <div className='flex w-full flex-grow flex-col'>
                  <label
                    htmlFor='message'
                    className='h-fit w-fit border-b border-neutral-400 pb-5 text-4xl font-semibold text-neutral-500'
                  >
                    Your Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    className='flex-grow border-0 border-b border-neutral-500 py-8 text-3xl text-gray-500 focus:border-neutral-500 focus:ring-0'
                    required
                  ></textarea>
                </div>

                <button
                  type='submit'
                  className='mt-36 h-24 rounded-full bg-gradient-to-r from-blue-400 to-pink-300 text-4xl font-bold text-white'
                >
                  Send
                </button>
              </div>
            </form>

            {/* Job Opportunities Banner */}
            <a
              href='mailto:Jobs@Momentstudio.com'
              className='bg-customBlue flex w-full items-center justify-around rounded-full'
            >
              <Asterisk className='h-8 w-8' />

              <p className='w-fit p-24 text-[2.5rem] font-light leading-normal text-white'>
                For Job Opportunities please contact <br />
                via Jobs@Momentstudio.com
              </p>

              <Asterisk className='h-8 w-8' />
            </a>
          </motion.div>
        </section>
      </main>
    </Layout>
  );
}
