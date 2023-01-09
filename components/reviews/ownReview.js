import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useToken } from "../lib/hooks/useToken";
import { EditableReview } from "./editableReview";

export function OwnReview({ token, setToken }) {
  const [review, setReview] = useState({
    title: "",
    text: "",
    recommended: true,
    author: "",
  });

  const [existingReview, setExistingReview] = useState(false);

  const { isLoading, error } = useQuery({
    queryKey: ["userReview", token],
    queryFn: () =>
      fetch("/api/reviews/userReview/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        if (res.status === 403) {
          setToken("");
          throw new Error("Invalid token");
        }
        if (res.status === 200) {
          setExistingReview(true);
          return res.json().then((res) => {
            setReview({
              title: res.title,
              text: res.text,
              recommended: res.recommended,
              author: JSON.parse(Buffer.from(token.split(".")[1], "base64"))
                .username,
            });
            return res;
          });
        }
        if (res.status === 204) {
          setExistingReview(false);
          setReview({
            title: "",
            text: "",
            recommended: true,
            author: JSON.parse(Buffer.from(token.split(".")[1], "base64"))
              .username,
          });
          return res;
        }
      }),
    refetchOnWindowFocus: false,
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <EditableReview
      review={review}
      setReview={setReview}
      existingReview={existingReview}
      token={token}
      setToken={setToken}
    />
  );
}
