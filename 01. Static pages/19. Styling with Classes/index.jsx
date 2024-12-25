import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

/**
 * Challenge 1:
 * Add a `nav` > `ul` > `li` (x3). The 3 items should say:
 * "Pricing", "About", and "Contact"
 * 
 * Challenge 2:
 * Using flexbox, line up the `li`s horizontally and put them inline
 * with the React logo.
 * NOTE: for practice's sake, don't select any
 * elements, but use classes for all styling.
 * 
 * Challenge 3:
 * Move the `width` style off the JSX and into CSS with a dedicated
 * className on the img element, and change the width to 55px instead
 */


function Header() {
  return (
    <header className="header">
      <img className="react-logo" src="react-logo.png" alt="React logo" />
      <nav>
        <ul className="nav-ul">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <main>
      <h1>Reason I am excited to learn React</h1>
      <ol>
        <li>
          React is a popular library, so I will be able to fit in with all the
          coolest devs out there! 😎
        </li>
        <li>
          I am more likely to get a job as a front end developer if I know React
        </li>
      </ol>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2024 Ziroll development. All rights reserved.</small>
    </footer>
  );
}

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

root.render(<Page />);
