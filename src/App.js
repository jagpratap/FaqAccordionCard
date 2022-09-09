import { StrictMode, useState } from "react";

import "./App.css";

import Faqs from "./faqs";

const faqs = [
  {
    id: 1,
    query: "How many team members can I invite?",
    response: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    id: 2,
    query: "What is the maximum file upload size?",
    response: "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    id: 3,
    query: "How do I reset my password?",
    response: " Click “Forgot password” from the login page or “Change password” from your profile page.A reset link will be emailed to you.",
  },
  {
    id: 4,
    query: "Can I cancel my subscription?",
    response: "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    id: 5,
    query: "Do you provide additional support?",
    response: "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

const App = () => {
  const [selectedId, setSelectedId] = useState(null);
  const toggleHandler = (id) => {
    setSelectedId(id);
  };
  return (
    <StrictMode>
      <main className="main">
        <div className="card">
          <div className="card-illustrations-mobile">
            <img src="./assets/images/svg/illustration-woman-online-mobile.svg" alt="illustration" />
            <img src="./assets/images/svg/bg-pattern-mobile.svg" alt="illustration" />
          </div>
          <div className="card-illustrations-desktop">
            <div className="hidden-illustrations">
              <img src="./assets/images/svg/bg-pattern-desktop.svg" alt="illustration" />
              <img src="./assets/images/svg/illustration-woman-online-desktop.svg" alt="illustration" />
            </div>
            <img src="./assets/images/svg/illustration-box-desktop.svg" alt="illustration" />
          </div>
          <div className="card-body">
            <h1 className="card-title">FAQ</h1>
            <div className="card-faqs">
              {faqs.map((faq) => (
                <Faqs
                  key={faq.id}
                  {...faq}
                  onToggle={toggleHandler}
                  selectedId={selectedId}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </StrictMode>
  );
};

export default App;
