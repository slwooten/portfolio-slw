import './App.css';

// Components imported here //
import Header from './components/Header';
import Quote from './components/Quote';
import Bio from './components/Bio';
import WhatIDo from './components/WhatIDo';
import Projects from './components/Projects';
import EdAndExp from './components/EdAndExp';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <Header />
      <WhatIDo />
      <Quote />
      <Bio />
      <Education />
      <Projects />
      <EdAndExp />
    </div>
  );
}

export default App;
