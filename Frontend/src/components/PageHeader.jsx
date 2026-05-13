import "./PageHeader.css";

function PageHeader({ title, description, buttonText }) {
  return (
    <div className="page-header">
      <div className="page-header-text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      {buttonText && (
        <button className="page-header-button">
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default PageHeader;