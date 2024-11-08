import './HelpBox.css';

function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h2>{title}</h2>
      <span>{text}</span>
    </article>
  );
}

export default HelpBox;
