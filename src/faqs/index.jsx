const Faqs = ({
  id, query, response, selectedId, onToggle,
}) => (
  <div className="card-faq">
    <div
      className="faq-content"
      role="button"
      tabIndex="0"
      onClick={() => onToggle(selectedId === id ? null : id)}
      onKeyDown={() => onToggle(selectedId === id ? null : id)}
    >
      <div className="faq-text">
        <p className={id === selectedId ? "faq-query-active" : "faq-query"}>{query}</p>
        <p className={id === selectedId ? "faq-response-show" : "faq-response-hide"}>{response}</p>
      </div>
      <img src="./assets/images/svg/icon-arrow-down.svg" alt="down_arrow" />
    </div>
    <div className="faq-divider" />
  </div>
);

export default Faqs;
