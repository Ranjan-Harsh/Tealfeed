import React from 'react';
import CodeEditor from './CodeEditor';

const App = () => {
  return (
    <div className="box">
      <h1 className="header">simple-code-editor</h1>
      <a className="github-button" href="https://github.com/Ranjan-Harsh">
      GitHub
      </a>
      <CodeEditor />
    </div>
  );
};

export default App;
