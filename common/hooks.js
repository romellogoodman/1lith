import * as Fathom from 'fathom-client';
import _debounce from 'lodash/debounce';
// import {useRouter} from 'next/router';
import {useEffect, useRef, useState} from 'react';

export const useInputChange = (defaultInput = '') => {
  const [input, setInput] = useState(defaultInput);
  const handleInputChage = (ev) => {
    setInput(ev.target.value);
  };

  return [input, handleInputChage];
};

// Taken from - https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export const useToggle = (initalState = false) => {
  const [value, setValue] = useState(initalState);
  const toggleValue = () => setValue(!value);

  return [value, toggleValue, setValue];
};

// Taken from - https://usehooks.com/useKeyPress/
export function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  // If pressed key is our target key then set to true
  function downHandler({key}) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  // If released key is our target key then set to false
  const upHandler = ({key}) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
}

// Taken from - https://vercel.com/guides/deploying-nextjs-using-fathom-analytics-with-vercel
export const useFathom = () => {
  // const router = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load('JLDZAPDH', {
      includedDomains: ['goodgraphics.xyz'],
    });

    // NOTE: We arent doing any next/link transitions but just in case
    // function onRouteChangeComplete() {
    //   Fathom.trackPageview();
    // }
    // // Record a pageview when route changes
    // router.events.on('routeChangeComplete', onRouteChangeComplete);

    // // Unassign event listener
    // return () => {
    //   router.events.off('routeChangeComplete', onRouteChangeComplete);
    // };
  }, []);
};
