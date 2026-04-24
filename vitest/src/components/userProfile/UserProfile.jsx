import css from "./UserProfile.module.css";
import { useState, useEffect } from "react";

export default function UserProfile({ id = 1 }) {
  const [user, setUser] = useState(null);

  async function getUser(userId) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
      );
      const responseData = await response.json();
      setUser(responseData);
    } catch (err) {
      console.error(`Something went wrong , ${err}`);
    }
  }

  useEffect(() => {
    getUser(id);
  }, []);

  return (
    <>
      <div className={css.center}>
        {!user ? (
          <p>loading ...</p>
        ) : (
          <>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </>
        )}
      </div>
    </>
  );
}
