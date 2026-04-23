import css from "./UserProfile.module.css";
import { useState, useEffect } from "react";

export default function UserProfile({ id = "" }) {
  const [user, setUser] = useState({});

  async function getUser(id) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );
      const responseData = await response.json();
      setUser(responseData);
    } catch (err) {
      console.error(`Something went wrong , ${err}`);
    }
  }

  useEffect(() => {
    getUser(4);
  }, []);

  return (
    <>
      <div className={css.center}>
        <h2>{user.name}</h2>
        <h3>{user.email}</h3>
      </div>
    </>
  );
}
