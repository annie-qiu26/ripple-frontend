import React, { useState, useEffect, useCallback } from 'react';
import debounce from "lodash/debounce";

import "./RippleEffect.css";

export default function RippleEffect(props) {
  const [ripples, setRipples] = useState([]);
  const clearRipples = useCallback(debounce( () => setRipples([]), 1000), []);

  const click = useCallback(e => {
    const x = e.clientX;
    const y = e.clientY;
    const newRipple = { left: x, top: y }
    setRipples([...ripples, newRipple])

    clearRipples();
  }, [ripples, clearRipples]);

  useEffect(() => {
    document.addEventListener('click', click);

    return () => document.removeEventListener('click', click);
  }, [click]);

  return (
    <div>
      {ripples.map(r => (
        <span key={`${r.left}-${r.top}`} className="ripple" style={r}/>
      ))}
    </div>
  );
}