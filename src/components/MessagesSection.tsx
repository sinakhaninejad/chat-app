import { useEffect, useState } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";

function MessagesSection({ db, user }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "message"),
      orderBy("createdAt", "desc"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessages(sortedMessages);
    });
    return unsubscribe;
  }, []);

  if (user) {
    return (
      <>
        <div className=" grid grid-cols-12 overflow-x-auto gap-y-2  no-scrollbar">
          {messages.map((message) => {
            return (
              <div
                key={message.id}
                className=" col-start-1 col-end-13 p-3 rounded-lg"
              >
                <div
                  className={`${
                    message.uid === user.uid ? " flex-row-reverse" : "flex-row"
                  } flex items-center justify-start `}
                >
                  <div
                    className={` flex items-center justify-center bg-indigo-500 h-10 w-10 rounded-full  flex-shrink-0`}
                  >
                    {message.name.charAt(0).toUpperCase()}
                  </div>
                  <div
                    className={`${
                      message.uid === user.uid ? " bg-indigo-100" : "bg-white"
                    } relative ml-3 text-sm   py-2 px-4 mx-3 shadow rounded-xl`}
                  >
                    <div className="max-w-sm">{message.text}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default MessagesSection;
