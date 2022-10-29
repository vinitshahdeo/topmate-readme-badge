import CodeComponent from '../CodeComponent/CodeComponent';
import '../Results/Results.css';

const Results = ({ badgeUrl, linkProfile, isLinkToPeerlist = true }) => {
  const badgeMdUrl = `![Topmate](${badgeUrl})`;
  const badgeMdUrlLink = `[![Topmate](${badgeUrl})](${linkProfile})`;
  const htmlUrl = `<a href="${linkProfile}"><img src="${badgeUrl}" alt="Connect on Topmate" /></a>`;

  return (
    <div className="ResultsContainer">
      <div className="ResultsContainer__ImageWrapper">
        <img src={badgeUrl} alt="badge" />
      </div>
      <CodeComponent
        label={'Markdown'}
        language={'markdown'}
        url={isLinkToPeerlist ? badgeMdUrlLink : badgeMdUrl}
      />
      <CodeComponent
        label={'HTML'}
        url={htmlUrl} 
        language={'htmlbars'}
      />
    </div>
  );
};

export default Results;
