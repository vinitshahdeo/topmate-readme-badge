import { useState } from "react";
import "./App.css";
import CustomSelect from "./Components/CustomSelect/CustomSelect";
import Input from "./Components/Input/Input";
import GitHubButton from 'react-github-btn';
import {FaLongArrowAltRight} from 'react-icons/fa'
import InputUsername from "./Components/InputUsername/InputUsername";
import Results from "./Components/Results/Results";

const options = [
  { value: "flat", label: "flat" },
  { value: "flat-square", label: "flat-square" },
  { value: "plastic", label: "plastic" },
  { value: "social", label: "social" },
  { value: "for-the-badge", label: "for-the-badge" },
];

const initialFormState = {
  nameValue: "",
  selectValue: options[0].value,
  peerlistUsername: "",
};

function App() {
  const [formState, setFormState] = useState(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [badgeUrl, setBadgeUrl] = useState(
    `https://peerlist-readme-badge.herokuapp.com/api/${formState.nameValue}?style=${formState.selectValue}`
  );
  const [linkProfile, setLinkProfile] = useState(`https://peerlist.io/${formState.peerlistUsername}`);

  const onSubmit = (e) => {
    e.preventDefault();
    setBadgeUrl(
      (prev) =>
        (prev = `https://peerlist-readme-badge.herokuapp.com/api/${formState.nameValue}?style=${formState.selectValue}`)
    );
    if (isChecked) {
      setLinkProfile((prev) => (prev = `https://peerlist.io/${formState.peerlistUsername}`));
    }
    setIsSubmitted(true);
  };

  const onSelectValueChange = ({ value }) => {
    if (isSubmitted) {
      setBadgeUrl(`https://peerlist-readme-badge.herokuapp.com/api/${formState.nameValue}?style=${value}`);
    }
    setFormState((prev) => ({ ...prev, selectValue: value }));
  };

  return (
    <>
    <div>
    <img className="img_badge" src="/image10.png" alt="image" />

    <div className="HeaderContainerComponent">
 
    <div style={{marginLeft:"10px",marginTop:"5px"}}>
<GitHubButton  href="https://github.com/vinitshahdeo/topmate-readme-badge" data-color-scheme="no-preference: light; light: light; dark: light;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star vinitshahdeo/topmate-readme-badge on GitHub">Star</GitHubButton>
</div>
<div style={{marginLeft:"10px",marginTop:"5px"}}>
<GitHubButton href="https://github.com/vinitshahdeo/topmate-readme-badge/fork" data-color-scheme="no-preference: light; light: light; dark: light;" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork vinitshahdeo/topmate-readme-badge on GitHub">Fork</GitHubButton>
</div>

       <button className="button_topmate">Claim your Topmate Link <div style={{float: "right", marginTop:"1.5px",marginLeft:"4px"}}><FaLongArrowAltRight/></div></button>
         </div>
          </div>
          <div className="container">
          <div >
          <img   src="/image13.png" alt="image" />
          </div>
    <main className="MainContainer">
     
      <h1 className="MainContainer__Title"><a className="Topmate">Topmate.io</a> Readme Badge Generator</h1>
      <h1 className="MainContainer__SubTitle">for README.md</h1>
      <div className="FormContainer">
        <form onSubmit={onSubmit}>
          <Input label="Name" value={formState.nameValue} setFormState={setFormState} inputId="name" isRequired />
          <CustomSelect
            label="Style"
            placeholder="Select"
            className="FormContainer__Select"
            onChange={onSelectValueChange}
            options={options}
          />
        
          {isChecked && <InputUsername value={formState.peerlistUsername} setFormState={setFormState} />}
          <div className="FormContainer__ButtonWrapper">
            <button className="FormContainer__Button">Generate Badge</button>
          </div>
          <div className="Move_Another">Click here to get your <a style={{color: '#00AA45'}}>peerlist badge</a></div>
        </form>
      
      </div>
      {isSubmitted && <Results badgeUrl={badgeUrl} linkProfile={linkProfile} isLinkToPeerlist={isChecked} />}
    </main>
    <div >
          <img   src="/image12.png" alt="image" />
          </div>
    </div>
   
    </>
  );
}

export default App;
