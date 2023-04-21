import { Link } from "react-router-dom";

function Header({ user }) {
  return (
    <header id="header">
      <h1>NC News</h1>
      <h2>Come here for the juiciest gossip!</h2>
      {!user && <Link to="/users">Please Log In Here</Link>}
      {user && <p>Logged in as: {user}</p>}
    </header>
  );
}

export default Header;
