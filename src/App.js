import './App.css';

// Components imported here //
import Header from './components/Header';
import Quote from './components/Quote';
import Bio from './components/Bio';
import WhatIDo from './components/WhatIDo';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Header />
      <WhatIDo />
      <Quote />
      <Bio />
      <Projects />
    </div>
  );
}

export default App;
