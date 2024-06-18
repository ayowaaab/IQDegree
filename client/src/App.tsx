import { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from "axios";

interface User {
  name: string;
  email: string;
  role: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>();
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/user")
      .then((respones) => setUsers(respones.data))
      .catch((error) => console.error("Error Fetching date", error));
  }, []);

  return (
    <>
      {users &&
        users.map((u) => <Card email={u.name} name={u.email} role={u.role} />)}
    </>
  );
};

export default App;
