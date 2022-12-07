import './App.css';

// Components imported here //
import Header from './components/Header';
import Quote from './components/Quote';
import Bio from './components/Bio';
import WhatIDo from './components/WhatIDo';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <WhatIDo />
      <Quote />
      <Bio />
      <Education />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
