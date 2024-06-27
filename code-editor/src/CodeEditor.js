// src/CodeEditor.js

import React, { useState } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import './CodeEditor.css';

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="editor-container">
      <textarea
        value={code}
        onChange={handleChange}
        className="code-input"
        spellCheck="false"
      />
      <Highlight
        code={code}
        language="javascript"
        theme={themes.dracula}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeEditor;
