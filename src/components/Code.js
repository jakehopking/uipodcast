import React, {useState} from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/synthwave84';
// import styled from 'styled-components';
import styled from '@emotion/styled';
import {copyToClipboard} from '../utils/copyToClipboard';

const Code = ({codeString, language, ...props}) => {
  const [copied, setCopied] = useState(false);

  const Pre = styled.pre`
    padding: 0 10px;
    overflow-x: auto;
    border-radius: 3px;
    border-top-right-radius: 0;
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
    padding: 4px 8px;
    top: 3px;
    right: 3px;
    border: 0;
    border-radius: 3px;
    /* border-top-right-radius: 3px;
    border-bottom-left-radius: 3px; */
    opacity: 0.3;
    background-color: var(--colour-blue);
    transition: all ease-in-out 0.3s;
    &:hover,
    &:focus {
      opacity: 1;
      color: white;
      outline: none;
    }
    &:hover {
      background-color: var(--colour-pink);
    }
  `;

  const Container = styled.div`
    position: relative;
    &::before {
      position: absolute;
      content: "${language}";
      color: var(--colour-body-bg);
      background-color: var(--colour-pink);
      top: 0;
      left: 15px;
      font-size: 14px;
      padding: 0 10px;
      text-transform: uppercase;
      font-family: monospace;
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
      z-index: 1;
    }
  `;

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
        <Container>
          <Pre className={className + ' font-mono'} style={style}>
            <CopyCode onClick={handleClick}>
              {copied ? 'Copied' : 'Copy'}
            </CopyCode>

            <code>
              {tokens.map((line, i) => (
                <div {...getLineProps({line, key: i})}>
                  <LineNo>{i + 1}</LineNo>

                  {line.map((token, key) => (
                    <span {...getTokenProps({token, key})} />
                  ))}
                </div>
              ))}
            </code>
          </Pre>
        </Container>
      )}
    </Highlight>
  );
};

export default Code;
