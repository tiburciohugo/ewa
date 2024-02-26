import { getSession } from "@/app/actions";
import { User } from "@/app/types/types";
import { sessionOptions } from "@/lib/auth";
import { fetchUser } from "@/lib/user";
import { cookies } from "next/headers";

type LoginBodyRequest = {
  email: string;
  password: string;
};
export async function POST(req: Request) {
  const session = await getSession();
  const cookie = cookies();
  try {
    const { email, password } = (await req.json()) as LoginBodyRequest;
    if (!email || !password) {
      return Response.json({
        status: 400,
        body: "Email and password are required",
      });
    }
    const existingUser: User | null = await fetchUser(email);
    if (!existingUser) {
      return Response.json({
        status: 422,
        body: "User does not exist",
      });
    }

    session.username = existingUser.username;
    session.email = existingUser.email;

    await session.save();
    cookie.set("session", session.email, sessionOptions.cookieOptions);

    return Response.json({
      status: 200,
      cookies: cookie,
      body: { message: "User logged in successfully" },
    });
  } catch (error) {
    console.error(error);
    return Response.json({
      status: 500,
      body: "Error parsing request",
    });
  }
}
