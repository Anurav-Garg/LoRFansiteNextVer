import { useEffect, useState } from "react";

export function useToken() {
  const [token, setToken] = useState();

  useEffect(() => {
    const tokenString = localStorage.getItem("token");
    if (tokenString !== "undefined") {
      setToken(tokenString);
    }
  }, [token]);

  const saveToken = (userToken) => {
    localStorage.setItem("token", userToken);
    setToken(userToken);
  };

  return { setToken: saveToken, token };
}
