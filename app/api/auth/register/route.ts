import { hashPassword } from "@/lib/auth";
import { fetchUser, userRepository } from "@/lib/user";

type RegisterBodyRequest = {
  email: string;
  password: string;
};
export async function POST(req: Request) {
  try {
    const { email, password } = await req.json() as RegisterBodyRequest;
    if (!email || !password) {
      return Response.json({
        status: 400,
        body: "Email and password are required",
      });
    }

    const existingUser = await fetchUser(email);
    if (existingUser) {
      return Response.json({
        status: 422,
        body: "User already exists",
      });
    }

    const hashedPassword = await hashPassword(password);

    const usersCollection = userRepository;

    usersCollection.insertOne({ email, hashedPassword });

    return Response.json({
      status: 200,
      body: { message: "User created successfully" },
    });
  } catch (error) {
    console.error(error);
    return Response.json({
      status: 500,
      body: "Error parsing request",
    });
  }
}
