import { BoxLink } from './BoxLink';
import { Grid } from './Grid';

function App() {
  return (
    <div style={styles.app}>
      <h1 style={styles.heading}>Jesse’s Music & Code Playground</h1>
      <Grid>
        <BoxLink title="Koch Synth" href="https://koch-synth.netlify.app/" alt="Koch Synth" imgSrc="assets/koch-synth.png" />
        <BoxLink title="Rubik's Snake" href="https://snake-sequencer.netlify.app/" alt="Rubik's Snake" imgSrc="assets/snake-sequencer.png" />
        <BoxLink title="Three Golden Rectangles" href="https://three-golden-rectangles.netlify.app/" alt="Three Golden Rectangles" imgSrc="assets/three-golden-rectangles.png" />
      </Grid>
    </div>
  );
}

const styles = {
  app: {
      margin: '50px 0',
  },
  heading: {
    textAlign: 'center',
    fontWeight: 100,
    fontSize: 60
  }
} as const;

export default App;
