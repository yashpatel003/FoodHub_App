import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "YASH PATEL",
    email: "yashjpatel2003@gmail.com",
  },
});

export default UserContext;
