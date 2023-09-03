import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

function Navbar({ user }) {
  const hadleLogout = () => {
    signOut(auth).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className="w-full">
      <div className="w-11/12 mx-auto flex justify-between mt-3">
        {user ? (
          <h1 className="py-2 px-5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md">
            {user.email}
          </h1>
        ) : (
          <h1></h1>
        )}
        {user ? (
          <button
            className="py-2 px-5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md"
            onClick={hadleLogout}
          >
            Logout
          </button>
        ) : (
          <button className="py-2 px-5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md">
            <Link to="signin">log in</Link>
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
