import bcrypt from "bcrypt";
import { SessionOptions } from "iron-session";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(12);
  return await bcrypt.hash(password, salt);
};

export const verifyPassword = async (
  password: string,
  hashedPassword: string,
) => {
  return await bcrypt.compare(password, hashedPassword);
};

export const sessionOptions: SessionOptions = {
  password: process.env.SECRET_COOKIE_PASSWORD as string,
  cookieName: "session",
  cookieOptions: {
    httpOnly: true,
    secure: process.env.VERCEL_ENV === "production",
  },
};
