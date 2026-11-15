import LoginForm from "./login/LoginForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black p-4">
      <h2 className="bg-blue-500 text-white font-bold p-2 rounded-md mb-4">
        Login Form with useState() hooks
      </h2>

      <LoginForm />
    </main>
  );
}
