// import React, {useContext}from "react";
// import UserContext from "../Context/UserContext";
// function Profile(){
//         const {user} = useContext(UserContext)

//         if(!user) return <div>Please log in </div>
//         return <div>Welcome {user.username}</div>
// }

// export default Profile;


import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return null;

  return (
    <div className="mt-4 text-center text-xl font-semibold text-green-700">
      Welcome, {user.username}!
    </div>
  );
}

export default Profile;
