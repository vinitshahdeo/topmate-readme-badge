import { useState } from 'react';
import './App.css';
import CustomSelect from './Components/CustomSelect/CustomSelect';
import Input from './Components/Input/Input';
import GitHubButton from 'react-github-btn';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { SiPostman } from 'react-icons/si';
import { ImTwitter } from 'react-icons/im';
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
      <div className="container">
        <div className="head">
          <img className="img_badge" src="/topmate_light.png" alt="alternate" />

          <div className="HeaderContainerComponent">
            <div style={{ marginTop: '5px', marginRight: '8px' }}>
              <GitHubButton
                href="https://github.com/vinitshahdeo/topmate-readme-badge"
                data-size="large"
                aria-label="Discuss buttons/github-buttons on GitHub"
              >
                View on GitHub
              </GitHubButton>
            </div>
            <div style={{ marginRight: '8px', marginTop: '5px' }}>
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
            <div style={{ marginTop: '5px', marginRight: '20px' }}>
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
          </div>
        </div>

        <div>
          <main className="MainContainer">
            <h1 className="MainContainer__Title">
              <span className="Topmate">Topmate.io</span> README Badge Generator
            </h1>
            <h1 className="MainContainer__SubTitle">
              Style your GitHub Profile README with an awesome{' '}
              <div style={{ marginRight: '5px', marginLeft: '5px' }}>
                <a href="https://topmate.io/vinitshahdeo" target={'_blank'}>
                  <img
                    src="https://topmate-readme-badge.herokuapp.com/vinitshahdeo?style=flat"
                    alt="Topmate Badge"
                  />
                </a>
              </div>{' '}
              badge
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
                  <a
                    href="https://github.com/vinitshahdeo/peerlist-readme-badge"
                    target={'_blank'}
                  >
                    Click here to get your{' '}
                    <span style={{ color: '#00aa45' }}>Peerlist</span> Badge
                    <div
                      style={{
                        float: 'right',
                        marginTop: '1.5px',
                        marginLeft: '2px'
                      }}
                    >
                      <FiExternalLink />
                    </div>
                    <a> </a>
                  </a>
                </div>
              </form>
            </div>
            {isSubmitted && <Results badgeUrl={badgeUrl} />}
            <div className="button_Container">
              <div>
                <button className="button_postman">
                  <a
                    href="https://www.postman.com/restless-rocket-22186/workspace/topmate-readme-badges-api/documentation/6178851-c863d626-b2e3-49bf-82d0-4e4cb46a089c"
                    target={'_blank'}
                  >
                    {' '}
                    View on Postman{' '}
                  </a>
                  <div
                    style={{
                      float: 'left',
                      marginTop: '1.5px',
                      marginRight: '4px'
                    }}
                  >
                    <SiPostman />
                  </div>
                </button>
              </div>
              <div>
                <button className="button_topmate">
                  <div
                    style={{
                      float: 'left',
                      marginTop: '1.5px',
                      marginRight: '4px'
                    }}
                  >
                    <FaExternalLinkAlt />
                  </div>
                  Claim your Topmate link
                </button>
              </div>
              <div>
                <button className="button_twitter">
                  <a
                    href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fvinitshahdeo%2Ftopmate-readme-badge&via=Vinit_Shahdeo&text=Style%20your%20GitHub%20Profile%20README%20with%20an%20awesome%20Topmate%20badge&hashtags=topmate%2Creadme%2Cbadge"
                    target={'_blank'}
                  >
                    {' '}
                    Share on Twitter{' '}
                  </a>
                  <div
                    style={{
                      float: 'left',
                      marginTop: '1.5px',
                      marginRight: '4px'
                    }}
                  >
                    <ImTwitter />
                  </div>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
