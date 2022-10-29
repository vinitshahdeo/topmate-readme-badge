import '../CodeComponent/CodeComponent.css';
import { AiFillCopy, AiOutlineCheck } from 'react-icons/ai';
import { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { isblEditorLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeComponent = ({ label, url, language }) => {
  const [isCopied, setisCopied] = useState(false);

  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const copyOnClick = () => {
    copyTextToClipboard(url);
    setisCopied(true);
    setTimeout(() => setisCopied(false), 2500);
  };

  return (
    <div className="CodeComponentContainer">
      <h3>{label}</h3>
      <div className="CodeBlock">
          <div className="CodeBlock__Wrapper">
            <div>
              <SyntaxHighlighter language={language} wrapLongLines style={isblEditorLight}>
                {url}
              </SyntaxHighlighter>
            </div>
            <div className="CodeBlock__ButtonWrapper">
              {isCopied ? (
                <AiOutlineCheck size={20} className="CodeBlock__Button" />
              ) : (
                <AiFillCopy
                  size={20}
                  className="CodeBlock__Button"
                  onClick={copyOnClick}
                />
              )}
            </div>
          </div>
      </div>
    </div>
  );
};

export default CodeComponent;
