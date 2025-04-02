"use client";

import { useUserAuth } from "./_utils/auth-context";
import { useRouter } from "next/navigation";

export default function HomePage() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const router = useRouter();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
      router.push("/week-10/shopping-list"); 
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
 
const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
 

return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {!user ? (
        <>
          <h1 className="text-2xl font-bold">Welcome to Shopping List</h1>
          <button
            className="mt-4 p-2 bg-blue-500 text-white rounded"
            onClick={handleLogin}
          >
            Sign in with GitHub
          </button>
        </>
      ) : (
        <>
          <p className="text-lg">
            Signed in as, {user.displayName} ({user.email})
          </p>
          <button
            className="mt-4 p-2 bg-red-400 text-white rounded"
            onClick={handleLogout}
          >
            Sign Out
          </button>
          <button
            className="mt-4 p-2 bg-green-400 text-white rounded"
            onClick={() => router.push("/week-10/shopping-list")}
          >
            Go to Shopping List
          </button>
        </>
      )}
    </div>
  );
}