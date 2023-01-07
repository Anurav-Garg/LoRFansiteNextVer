import { useState } from "react";

export function LoginOrRegister({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [registerMode, setRegisterMode] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async function () {
    const result = await fetch(
      `/api/users/${registerMode ? "register" : "login"}`,
      {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (result.ok) {
      let json = await result.json();
      setToken(json.token);
      setError("");
    } else {
      let json = await result.json();
      setError(json.message);
    }
  };

  return (
    <div className="py-4 px-8 bg-slate-900/40 rounded-2xl w-min">
      <div className="text-2xl pb-4">
        Log in to post your own review of the game!
      </div>
      <form
        className="flex flex-col"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div className="flex gap-8 py-4">
          <div className="flex gap-4">
            <label className="text-lg">Username:</label>
            <input
              className="bg-inherit border-2 border-slate-300 text-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              maxLength={16}
            />
          </div>
          <div className="flex gap-4">
            <label className="text-lg">Password:</label>
            <input
              className="bg-inherit border-2 border-slate-300 text-lg"
              value={password}
              type={"password"}
              onChange={(e) => setPassword(e.target.value)}
              maxLength={24}
            />
          </div>
        </div>

        {registerMode ? (
          <>
            <div className="flex gap-4 self-center pt-4">
              <label className="text-lg">Confirm Password:</label>
              <div>
                <input
                  className="bg-inherit border-2 border-slate-300 text-lg"
                  value={password2}
                  type={"password"}
                  onChange={(e) => setPassword2(e.target.value)}
                  maxLength={24}
                />
                <div
                  className={`self-center text-center text-xs text-red-700 py-1 ${
                    password === password2 ? "opacity-0" : "opacity-100"
                  }`}
                >
                  Passowrds don't match
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        <button
          type="submit"
          disabled={
            username === "" ||
            password === "" ||
            (registerMode && password != password2)
          }
          className={`py-1 my-2 text-xl ${
            username === "" ||
            password === "" ||
            (registerMode && password != password2)
              ? "text-gray-500 border-gray-500"
              : "text-yellow-400 hover:text-yellow-200 border-yellow-400 hover:border-yellow-200"
          } backdrop-blur-md border-2 w-24 rounded-lg mx-auto font-semibold transition-colors ease-in-out duration-150`}
        >
          {registerMode ? "Register" : "Login"}
        </button>
        <button
          className="text-xs hover:text-blue-500"
          onClick={(e) => {
            e.preventDefault();
            setRegisterMode(!registerMode);
          }}
        >
          {registerMode
            ? "Already a user? Click here to login!"
            : "Not a user? Click here to register!"}
        </button>
        <div className="self-center text-lg text-red-700 pt-2">{error}</div>
      </form>
    </div>
  );
}
