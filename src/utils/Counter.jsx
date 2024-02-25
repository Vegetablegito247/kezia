import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger'

function Counter({ targetNumber }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  const [counterOn, setCounterOn] = useState(false);

  useEffect(() => {
    let animation;
    if (counterOn) {
      count.set(0);
      animation = animate(count, targetNumber, { duration: 2 });
    }

    return () => {
      if(animation) {
        animation.stop();
      }
    }
  }, [count, targetNumber, counterOn])

  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
      {
        counterOn && <motion.h1>{rounded}</motion.h1>
      }
    </ScrollTrigger>
  )
}

export default Counter;