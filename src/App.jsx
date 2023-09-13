import { Route, Routes } from "react-router-dom";
import "./App.css";
import BirthdayCard from "./components/BirthdayCard";
import Blob from "./components/Blob";
import Footer from "./components/Footer";
import MemoryGame from "./components/MemoryGame";

import "./styles/resets.css";


import MouseFollower from "mouse-follower";
import gsap from "gsap";
import Hangman from "./components/Hangman";
import Timeline from "./components/Timeline";

MouseFollower.registerGSAP(gsap);

const cursor = new MouseFollower({
  el: null,
  container: document.body,
  className: 'mf-cursor',
  innerClassName: 'mf-cursor-inner',
  textClassName: 'mf-cursor-text',
  mediaClassName: 'mf-cursor-media',
  mediaBoxClassName: 'mf-cursor-media-box',
  iconSvgClassName: 'mf-svgsprite',
  iconSvgNamePrefix: '-',
  iconSvgSrc: '',
  dataAttr: 'cursor',
  hiddenState: '-hidden',
  textState: '-text',
  iconState: '-icon',
  activeState: '-active',
  mediaState: '-media',
  stateDetection: {
      '-pointer': 'a,button',
      '-hidden': 'iframe'
  },
  visible: true,
  visibleOnState: true,
  speed: 0.55,
  ease: 'expo.out',
  overwrite: true,
  skewing: 0,
  skewingText: 2,
  skewingIcon: 2,
  skewingMedia: 2,
  skewingDelta: 0.001,
  skewingDeltaMax: 0.15,
  stickDelta: 0.15,
  showTimeout: 20,
  hideOnLeave: true,
  hideTimeout: 300,
  hideMediaTimeout: 300
});

cursor.setImg('src/images/bunny1.svg');

function App() {

  const handleMouseEnter = () => {
    cursor.show();
  }

  return (
    <>
      <Blob />
      <div className="app" onMouseEnter={handleMouseEnter}>
        <Routes>
          <Route path="/" Component={BirthdayCard} />
          <Route path="/memory" Component={MemoryGame} />
          <Route path="/hangman" Component={Hangman} />
          <Route path="/timeline" Component={Timeline} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
