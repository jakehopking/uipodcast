import React, {useState} from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/synthwave84';
// import {LiveEditor, LiveError, LivePreview, LiveProvider} from 'react-live';
// import styled from 'styled-components';
import styled from '@emotion/styled';
import {copyToClipboard} from '../utils/copyToClipboard';

const Pre = styled.pre`
  ${'' /* font-size: 16px !important; */}
  position: relative;
  padding: 10px !important;
  overflow-x: auto;
  border-radius: 3px;
  margin-bottom: 30px !important;
  .token-line {
    line-height: 1.5em;
    height: 1.5em;
  }
  font-family: 'Courier New', Courier, monospace;
`;

const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`;

const CopyCode = styled.button`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  border: 0;
  border-radius: 3px;
  border-top-left-radius: 0px;
  border-bottom-right-radius: 0px;
  opacity: 0.6;
  background-color: var(--colour-blue);
  transition: all ease-in-out 0.3s;
  &:hover {
    opacity: 1;
    background-color: var(--colour-pink);
  }
  &:focus {
    outline: none;
  }
`;

const Code = ({codeString, language, ...props}) => {
  const [copied, setCopied] = useState(false);
  // if (props['react-live']) {
  //   return (
  //     <LiveProvider code={codeString} noInline={true} theme={theme}>
  //       <LiveEditor />
  //       <LiveError />
  //       <LivePreview />
  //     </LiveProvider>
  //   );
  // }

  const handleClick = () => {
    copyToClipboard(codeString);
    setCopied(true);
  };

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <Pre className={className + ' font-mono'} style={style}>
          <CopyCode onClick={handleClick}>
            {copied ? 'Copied' : 'Copy'}
          </CopyCode>

          {tokens.map((line, i) => (
            <div {...getLineProps({line, key: i})}>
              <LineNo>{i + 1}</LineNo>

              {line.map((token, key) => (
                <span {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </Pre>
      )}
    </Highlight>
  );
};

export default Code;
