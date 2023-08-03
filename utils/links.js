import Dashboard from "@/public/menu.png";
import Newpost from "@/public/plus.png";
import Logout from "@/public/logout.png";
import { signOut } from "next-auth/react";

export const links = [
  {
    name: "Dashboard",
    path: "/",
    image:  Dashboard ,
  },
  {
    name: "New Post",
    path: "/new_post",
    image: Newpost ,
  },
  {
    name: "Log Out",
    path: {signOut},
    image: Logout ,
  },
];
