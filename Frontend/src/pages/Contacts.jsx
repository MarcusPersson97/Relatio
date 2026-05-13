import "./Contacts.css";

function Contacts() {
  const contacts = [
    {
      name: "Inge Aas Eriksen",
      email: "inge@example.com",
      phone: "0701234567",
      company: "Norwegian fish & oil",
    },
    {
      name: "Teo Turland",
      email: "teo@example.com",
      phone: "0739876543",
      company: "Homemade Coffee",
    },
    {
      name: "Marcus Persson",
      email: "marcus@example.com",
      phone: "0765552211",
      company: "PQ Formel AB",
    },
  ];

  return (
    <div className="contacts-page">
      <div className="contacts-header">
        <div>
          <h1>Contacts</h1>
          <p>Manage and organize your customer contacts.</p>
        </div>

        <button className="add-contact-button">Add contact</button>
      </div>

      <div className="contacts-toolbar">
        <input type="text" placeholder="Search contacts..." />
      </div>

      <section className="contacts-grid">
        {contacts.map((contact, index) => (
          <div className="contact-card" key={index}>
            <div className="contact-avatar">{contact.name.charAt(0)}</div>

            <h3>{contact.name}</h3>
            <p>{contact.company}</p>

            <div className="contact-info">
              <span>{contact.email}</span>
              <span>{contact.phone}</span>
            </div>

            <button className="view-contact-button">View details</button>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Contacts;