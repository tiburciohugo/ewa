import { fetchUser } from "@/lib/user";

type LoginBodyRequest = {
  email: string;
  password: string;
};
export async function POST(req: Request) {
  try {
    const { email, password } = (await req.json()) as LoginBodyRequest;
    if (!email || !password) {
      return Response.json({
        status: 400,
        body: "Email and password are required",
      });
    }
    const existingUser = await fetchUser(email);
    if (!existingUser) {
      return Response.json({
        status: 422,
        body: "User does not exist",
      });
    }
    return Response.json({
      status: 200,
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
