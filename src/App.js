
function App() {
  return (
    <div className="desktop">
      <header className="header">
        <img src="/logo.png" alt="Selleo" className="logo"/>
        <navbar className="navbar">
          <a className="navbar__link -active" href="/#">Home</a>
          <a className="navbar__link" href="/#">About</a>
          <a className="navbar__link" href="/#">Services</a>
          <a className="navbar__link" href="/#">Events</a>
          <a className="navbar__link" href="/#">Blog</a>
        </navbar>
        <nav className="navbar--right">
          <button className="button -primary">My Membership</button>
          <a className="navbar__link" href="/#">Login</a>
        </nav>
      </header>

      <div className="spaghetti"/>
      <main className="hero">
        <div className="hero__side">
          <div className="hero__text">
            <h1 className="hero__header">School Nutrition Training</h1>
            <h3 className="hero__secondary-header">USDA-approved Professional Standards Tracking and More</h3>
          </div>
          <div className="hero__buttons">
            <button className="button -raised">Get started</button>
            <button className="button -primary">Learn more</button>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
