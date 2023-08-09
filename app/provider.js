"use client";

import { SessionProvider } from "next-auth/react";

export const NextAuthProvider = ({ children }) => {
    //Session Provider provides access to session data
  return <SessionProvider>{children}</SessionProvider>;
};
