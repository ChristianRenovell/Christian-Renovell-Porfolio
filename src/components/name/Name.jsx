import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring';
import './name.scss';

const items = ['christian','renovell']
const config = { mass: 5, tension: 800, friction: 250 }

function Name() {
  const [toggle, set] = useState(true)
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 400 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  return (
    <div className="trails-main" onClick={() => set(state => !state)} >
      <div id="fullpage2">
        {trail.map(({ x, height, ...rest }, index) => (
          <a><animated.div
            key={items[index]}
            className="trails-text"
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div></a>
        ))}
      </div>
    </div>
  )
}

export default Name;
