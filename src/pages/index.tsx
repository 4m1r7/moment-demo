import * as React from 'react';
import { useEffect, useState } from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { usePosition } from '@/PositionContext';

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
    x: '0vw',
    y: '-15vh',
    width: '18vw',
    height: 'fit-content',
    opacity: 0,
    rotate: 0,
  },
  line: {
    x: '0vw',
    y: '-15vh',
    width: '1vw',
    height: '3.5rem',
    opacity: 0,
    rotate: 0,
  },
  menu: {
    x: '0vw',
    y: '-15vh',
    width: '28vw',
    height: 'fit-content',
    opacity: 0,
    rotate: 0,
  },
  blue: {
    x: '28vw',
    y: '0vh',
    width: '17vw',
    height: '17vw',
    opacity: 0,
    rotate: 0,
  },
  yellow: {
    x: '8vw',
    y: '0vh',
    width: '12.5vw',
    height: '12.5vw',
    opacity: 0,
    rotate: 0,
  },
  green: {
    x: '-8vw',
    y: '0vh',
    width: '14vw',
    height: '14vw',
    opacity: 0,
    rotate: 0,
  },
  pink: {
    x: '-28vw',
    y: '0vh',
    width: '14vw',
    height: '14vw',
    opacity: 0,
    rotate: 0,
  },
};

const stagePositions: { [key: string]: stagePositions } = {
  firstPositions: {
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
      height: '3.5rem',
      opacity: 1,
      rotate: 0,
    },
    menu: {
      x: '0vw',
      y: '0vh',
      width: '28vw',
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

export default function HomePage() {
  const [showDefaultMode, setShowDefaultMode] = useState(true);

  const { lastPosition, setLastPosition } = usePosition();

  const dynamicInitials = lastPosition ? lastPosition : initialPositions;

  const [positions, setPositions] = useState<stagePositions>(
    stagePositions['firstPositions']
  );

  useEffect(() => {
    setLastPosition(positions);
  }, [positions, setLastPosition]);

  // TODO - remove no-unused-vars below when use implemented
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, unused-imports/no-unused-vars
  const [styles, setStyles] = useState<stageStyles>(
    stageStyles['firstPositions']
  );

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
    <Layout
      positions={positions}
      initialPositions={dynamicInitials}
      handleShapeClick={handleShapeClick}
    >
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main></main>
    </Layout>
  );
}
