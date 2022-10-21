import CodeComponent from "../CodeComponent/CodeComponent";
import "../Results/Results.css";

const Results = ({ badgeUrl, linkProfile, isLinkToPeerlist }) => {
  const badgeMdUrl = `![Topmate](${badgeUrl})`;
  const badgeMdUrlLink = `[![Topmate](${badgeUrl})](${linkProfile})`;
  const htmlUrl = `<img src="${badgeUrl}" alt="Topmate Badge" />`;

  return (
    <div className="ResultsContainer">
      <div className="ResultsContainer__ImageWrapper">
      <img src={badgeUrl} alt="badge" />
      </div>
      <CodeComponent label={"Markdown"} url={isLinkToPeerlist ? badgeMdUrlLink : badgeMdUrl} />
      <CodeComponent label={"Html"} url={htmlUrl} />
    </div>
  );
};
export default Results;
