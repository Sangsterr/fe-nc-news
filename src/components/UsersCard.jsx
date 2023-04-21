import { Link } from "react-router-dom";

function UsersCard({
  user,
  username,
  name,
  avatar_url,
  setUser,
  setUserAvatar,
}) {
  return (
    <main>
      <h3>Users</h3>
      <li className="each-user">
        <img
          src={avatar_url}
          alt={username}
          className="user-avatar"
          onClick={() => {
            setUser(username);
            setUserAvatar(avatar_url);
          }}
        />
        <p>User: {name}</p>
        <p>Username: {username}</p>
        <br />

        <button
          onClick={() => {
            setUser(username);
            setUserAvatar(avatar_url);
            console.log(username);
          }}
        >
          {" "}
          Log in as {username}{" "}
        </button>
      </li>
    </main>
  );
}

export default UsersCard;
