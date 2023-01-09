import { useToken } from "../lib/hooks/useToken";
import { OwnReview } from "./ownReview";
import { LoginOrRegister } from "./loginOrRegister";

export function UserReview() {
  const { token, setToken, deleteToken } = useToken();
  if (!token) {
    return <LoginOrRegister setToken={setToken} />;
  }

  return (
    <OwnReview setToken={setToken} token={token} deleteToken={deleteToken} />
  );
}
