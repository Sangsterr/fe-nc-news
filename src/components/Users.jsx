import { useEffect, useState } from "react";
import * as api from "../api";
import UsersCard from "./UsersCard";

function Users({ setUser, setUserAvatar }) {
  const [allUsers, setAllUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.fetchUsers().then((users) => {
      setAllUsers(users);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Page Loading...</p>;
  }

  return (
    <main>
      <ul id="users-list">
        {allUsers.map((user) => {
          return (
            <UsersCard
              setUserAvatar={setUserAvatar}
              setUser={setUser}
              key={user.username}
              username={user.username}
              name={user.name}
              avatar_url={user.avatar_url}
            />
          );
        })}
      </ul>
    </main>
  );
}

export default Users;
