import { defaultSession, sessionOptions } from "@/lib/auth";
import { SessionData } from "./types/types";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};
export const login = async () => {};
export const logout = async () => {};
export const register = async () => {};
