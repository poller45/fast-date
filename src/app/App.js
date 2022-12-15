import React, { useState} from "react";
import Users from "./components/Users";

import api from "./api";

function App() {
	const [users, setUsers] = useState(api.users.fetchAll());
   // const [users, setUsers] = useState();
   //  useEffect(() => {
   //      api.users.fetchAll().then((data) => setUsers(data));
   //  }, []);
	 const handleDelete = (userId) => {
      setUsers(users.filter((user) => user._id !== userId));
  };
	const handleToggleBookMark = (id) => {
		setUsers(
			users.map((user) => {
				if (user._id === id) {
					return { ...user, bookmark: !user.bookmark };
				}
				return user;
			})
		);
	};
	return (
		<div>
			
			<Users
				onDelete={handleDelete}
				onToggleBookMark={handleToggleBookMark}
				users={users}
			/>
		</div>
	);
}
export default App;
