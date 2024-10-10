import './HelpBox.css';

function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h3>{title}</h3>
      <span>{text}</span>
    </article>
  );
}

export default HelpBox;
