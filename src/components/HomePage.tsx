import { useState, useEffect } from "react";
//
import SendMessage from "./SendMessage";
import MessagesSection from "./MessagesSection";
import Navbar from "./Navbar";
//
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebase";

function HomePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <>
      <Navbar user={user} />
      <div className="flex h-[90vh] antialiased text-gray-800">
        <div className="flex flex-row h-full w-full ">
          <div className="flex flex-col flex-auto h-full p-6">
            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
              <div className="flex flex-col h-full overflow- mb-4">
                <div className="flex flex-col h-full">
                  <MessagesSection db={db} user={user} />
                </div>
                <div>
                  <SendMessage user={user} db={db} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
