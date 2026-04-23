import css from "./UserProfile.module.css";
import { useState, useEffect } from "react";

export default function UserProfile({ id = 1 }) {
  const [user, setUser] = useState({});

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

  if (!user) return <p>Loading ...</p>;
  return (
    <>
      <div className={css.center}>
        <h2>{user.name}</h2>
        <h3>{user.email}</h3>
      </div>
    </>
  );
}
