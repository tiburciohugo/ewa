
export default function SignUp() {
  return (
    <>
      <form>
        Sign Up
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
        />
        <label htmlFor="repeatPassword">Repeat password</label>
        <input
          type="password"
          id="repeatPassword"
        />
        <button>Create an account</button>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </>
  );
}
