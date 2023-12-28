import { BoxLink } from "./BoxLink";
import { Grid } from "./Grid";

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1 className="heading">Jesse Fischer</h1>
        <h2 className="subhead">Music, Math & Code Playground</h2>
      </div>
      <Grid>
        <BoxLink
          title="Life Tunes"
          href="https://life-tunes.netlify.app/"
          alt="Life Tunes"
          imgSrc="assets/life-tunes.png"
        />

        <BoxLink
          title="Binary Overtone Counter"
          href="https://binary-overtone-counter.vercel.app/"
          alt="Binary Overtone Counter"
          imgSrc="assets/binary-overtone-counter.png"
        />
        <BoxLink
          title="Rainbow Sounds"
          href="https://rainbow-sounds.vercel.app/"
          alt="Rainbow Sounds"
          imgSrc="assets/rainbow-sounds.png"
        />
        <BoxLink
          title="Koch Synth"
          href="https://koch-synth.netlify.app/"
          alt="Koch Synth"
          imgSrc="assets/koch-synth.png"
        />
        <BoxLink
          title="Rubik’s Snake Sequencer"
          href="https://snake-sequencer.netlify.app/"
          alt="Rubik's Snake Sequencer"
          imgSrc="assets/snake-sequencer.png"
        />
        <BoxLink
          title="Three Golden Rectangles"
          href="https://three-golden-rectangles.netlify.app/"
          alt="Three Golden Rectangles"
          imgSrc="assets/three-golden-rectangles.png"
        />
        <BoxLink
          title="Arp Tesselator"
          href="https://jessefischer.github.io/arptesselator/"
          alt="Arp Tesselator"
          imgSrc="assets/arp-tesselator.png"
        />
        <BoxLink
          title="Dots and Boxes"
          href="https://jf-dots-and-boxes.netlify.app/"
          alt="Dots and Boxes"
          imgSrc="assets/dots-and-boxes.png"
        />
      </Grid>
    </div>
  );
}

export default App;
