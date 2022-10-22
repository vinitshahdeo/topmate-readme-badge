import { useState } from 'react';
import './App.css';
import CustomSelect from './Components/CustomSelect/CustomSelect';
import Input from './Components/Input/Input';
import GitHubButton from 'react-github-btn';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

import Results from './Components/Results/Results';

const options = [
  { value: 'flat', label: 'flat' },
  { value: 'flat-square', label: 'flat-square' },
  { value: 'plastic', label: 'plastic' },
  { value: 'social', label: 'social' },
  { value: 'for-the-badge', label: 'for-the-badge' }
];

const initialFormState = {
  nameValue: '',
  selectValue: options[0].value,
  topmateUsername: ''
};

function App() {
  const [formState, setFormState] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [badgeUrl, setBadgeUrl] = useState(
    `https://topmate-readme-badge.herokuapp.com/${formState.nameValue}?style=${formState.selectValue}`
  );

  const onSubmit = (e) => {
    e.preventDefault();
    setBadgeUrl(
      (prev) =>
        (prev = `https://topmate-readme-badge.herokuapp.com/${formState.nameValue}?style=${formState.selectValue}`)
    );

    setIsSubmitted(true);
  };

  const onSelectValueChange = ({ value }) => {
    if (isSubmitted) {
      setBadgeUrl(
        `https://topmate-readme-badge.herokuapp.com/${formState.nameValue}?style=${value}`
      );
    }
    setFormState((prev) => ({ ...prev, selectValue: value }));
  };

  return (
    <>
      <div>
        <img className="img_badge" src="/image10.png" alt="alternate" />

        <div className="HeaderContainerComponent">
          <div style={{ marginLeft: '10px', marginTop: '5px' }}>
            <GitHubButton
              href="https://github.com/vinitshahdeo/topmate-readme-badge"
              data-color-scheme="no-preference: light; light: light; dark: light;"
              data-icon="octicon-star"
              data-size="large"
              data-show-count="true"
              aria-label="Star vinitshahdeo/topmate-readme-badge on GitHub"
            >
              Star
            </GitHubButton>
          </div>
          <div style={{ marginLeft: '10px', marginTop: '5px' }}>
            <GitHubButton
              href="https://github.com/vinitshahdeo/topmate-readme-badge/fork"
              data-color-scheme="no-preference: light; light: light; dark: light;"
              data-icon="octicon-repo-forked"
              data-size="large"
              data-show-count="true"
              aria-label="Fork vinitshahdeo/topmate-readme-badge on GitHub"
            >
              Fork
            </GitHubButton>
          </div>

          <button className="button_topmate">
            Claim your Topmate Link{' '}
            <div
              style={{ float: 'right', marginTop: '1.5px', marginLeft: '4px' }}
            >
              <FaExternalLinkAlt />
            </div>
          </button>
        </div>
      </div>
      <div className="container">
        <div>
          <img src="/image13.png" alt="alternate" />
        </div>
        <main className="MainContainer">
          <h1 className="MainContainer__Title">
            <span className="Topmate">Topmate.io</span> README{' '}
            <span className="code-md">Badge</span> Generator
          </h1>
          <h1 className="MainContainer__SubTitle">
            Style your GitHub Profile README with an awesome badge! <img src="https://topmate-readme-badge.herokuapp.com/vinitshahdeo?style=flat" alt="Topmate Badge" />
          </h1>
          <div className="FormContainer">
            <form onSubmit={onSubmit}>
              <Input
                label="Enter Topmate username"
                value={formState.nameValue}
                setFormState={setFormState}
                inputId="name"
                isRequired
              />
              <CustomSelect
                label="Choose badge style"
                placeholder="Select"
                className="FormContainer__Select"
                onChange={onSelectValueChange}
                options={options}
              />

              <div className="FormContainer__ButtonWrapper">
                <button className="FormContainer__Button">
                  Generate Badge
                </button>
              </div>
              <div className="Move_Another">
                <a href="https://github.com/vinitshahdeo/peerlist-readme-badge" target={'_blank'}>
                  Click here to get your{' '}
                  <span style={{ color: '#E64130' }}>Peerlist</span> Badge!
                  <FiExternalLink />
                </a>
              </div>
            </form>
          </div>
          {isSubmitted && <Results badgeUrl={badgeUrl} />}
        </main>
        <div>
          <img src="/image12.png" alt="alternate" />
        </div>
      </div>
    </>
  );
}

export default App;
