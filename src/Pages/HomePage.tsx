import { useState, useContext } from "react";
// import { UserPointsContext } from "../UserPointsContext";
import Title from "../Components/Title";
import NewUser from "../Components/NewUser/NewUser";
import Users from "../Components/Users/Users";

interface newUser {
  id: number;
  name: string;
  points: string;
}

const HomePage = () => {
  // const userPoints = useContext(UserPointsContext);

  const [users, setUsers] = useState<newUser[]>([]);

  const addUserHandler = (newUser: newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className="home">
      <Title />
    <div className="Pokerboard">
      <NewUser onAddUser={addUserHandler} />
      <Users items={users} />
    </div>
    </div>
  );
};

export default HomePage;
