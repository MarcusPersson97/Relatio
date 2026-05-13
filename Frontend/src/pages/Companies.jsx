import PageHeader from "../components/PageHeader";
import "./Companies.css";

function Companies() {
  const companies = [
    {
      name: "Nordic Sales AB",
      industry: "Sales",
      contacts: 12,
      location: "Malmö",
    },
    {
      name: "Tech Solutions",
      industry: "IT Consulting",
      contacts: 8,
      location: "Göteborg",
    },
    {
      name: "Green Office",
      industry: "Office Supplies",
      contacts: 5,
      location: "Stockholm",
    },
  ];

  return (
    <div className="companies-page">
      <PageHeader
        title="Companies"
        description="Manage companies and connect them to your contacts."
        buttonText="Add company"
      />

      <div className="companies-toolbar">
        <input type="text" placeholder="Search companies..." />
      </div>

      <section className="companies-grid">
        {companies.map((company, index) => (
          <div className="company-card" key={index}>
            <div className="company-avatar">{company.name.charAt(0)}</div>

            <h3>{company.name}</h3>
            <p>{company.industry}</p>

            <div className="company-info">
              <span>Contacts: {company.contacts}</span>
              <span>Location: {company.location}</span>
            </div>

            <button className="view-company-button">View details</button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Companies;