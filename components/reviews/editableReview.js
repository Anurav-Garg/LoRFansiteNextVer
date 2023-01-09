import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { MdThumbDown, MdThumbUp } from "react-icons/md";
import TextareaAutosize from "react-textarea-autosize";

export function EditableReview({
  review,
  setReview,
  existingReview,
  token,
  setToken,
}) {
  const queryClient = useQueryClient();
  const [notification, setNotification] = useState("");
  const [notificationIsSuccess, setNotificationIsSuccess] = useState(true);
  const [notificationIsVisible, setNotificationIsVisible] = useState(false);
  const removeNotification = function () {
    setTimeout(() => {
      setNotificationIsVisible(false);
      setTimeout(() => {
        setNotification("");
      }, 400);
    }, 5 * 1000);
  };

  const postMutation = useMutation({
    mutationFn: () => {
      return fetch(`/api/reviews/${existingReview ? "update" : "post"}`, {
        method: "POST",
        body: JSON.stringify({
          title: review.title,
          text: review.text,
          recommended: review.recommended,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        if (!res.ok) {
          return res.json().then((res) => {
            throw new Error(res.message);
          });
        }
        return res;
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userReview"] });
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
      setNotificationIsSuccess(true);
      setNotificationIsVisible(true);
      setNotification(
        `Review ${existingReview ? "updated" : "posted"} successfully!`
      );
      removeNotification();
    },
    onError: (error) => {
      setNotificationIsSuccess(false);
      setNotificationIsVisible(true);
      setNotification(`${error || "Internal server error"}`);
      removeNotification();
    },
  });

  const deletePostMutation = useMutation({
    mutationFn: () => {
      return fetch("/api/reviews/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        if (!res.ok) {
          return res.json().then((res) => {
            throw new Error(res.message);
          });
        }
        return res;
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["userReview"] });
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
      setNotificationIsSuccess(true);
      setNotificationIsVisible(true);
      setNotification("Review deleted successfully!");
      removeNotification();
    },
    onError: (error) => {
      setNotificationIsSuccess(false);
      setNotificationIsVisible(true);
      setNotification(`${error || "Internal server error"}`);
      removeNotification();
    },
  });

  const deleteAccountMutation = useMutation({
    mutationFn: () => {
      return fetch("/api/users/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => {
        if (!res.ok) {
          return res.json().then((res) => {
            throw new Error(res.message);
          });
        }
        return res;
      });
    },
    onSuccess: () => {
      setToken("");
      queryClient.invalidateQueries({ queryKey: ["userReview"] });
      queryClient.invalidateQueries({ queryKey: ["reviews"] });
    },
    onError: (error) => {
      setNotificationIsSuccess(false);
      setNotificationIsVisible(true);
      setNotification(`${error || "Internal server error"}`);
      removeNotification();
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        postMutation.mutate();
      }}
    >
      <div
        className={`bg-gradient-to-b ${
          review.recommended
            ? "from-blue-900/60 to-blue-900/50"
            : "from-red-800/80 to-red-900/70"
        } p-4 rounded-3xl`}
      >
        <div className="flex gap-4 items-center">
          <button
            onClick={(e) => {
              e.preventDefault();
              setReview({
                recommended: !review.recommended,
                text: review.text,
                title: review.title,
                author: review.author,
              });
            }}
          >
            {review.recommended ? (
              <MdThumbUp size={72}></MdThumbUp>
            ) : (
              <MdThumbDown size={72}></MdThumbDown>
            )}
          </button>
          <div className="grow">
            <div className="text-base">By: {review.author}</div>
            <input
              className="text-2xl bg-inherit w-full outline-none resize-none"
              value={review.title}
              placeholder="Title"
              maxLength={100}
              onChange={(e) => {
                setReview({
                  title: e.target.value,
                  author: review.author,
                  text: review.text,
                  recommended: review.recommended,
                });
              }}
            />
          </div>
        </div>
        <TextareaAutosize
          className="bg-inherit w-full outline-none resize-none"
          value={review.text}
          placeholder="Review..."
          maxLength={4096}
          onChange={(e) => {
            setReview({
              title: review.title,
              author: review.author,
              text: e.target.value,
              recommended: review.recommended,
            });
          }}
        />
      </div>
      <div className="flex flex-col">
        <div
          className={`${
            notificationIsSuccess ? "text-green-600" : "text-red-700"
          } text-base pt-1 h-6 transition-all duration-300 ease-in-out ${
            notificationIsVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {notification}
        </div>
        <div className="flex gap-10">
          <button
            type="submit"
            disabled={!(review.title && review.text) || postMutation.isLoading}
            className={`p-2 my-2 text-xl self-start ${
              !(review.title && review.text) || postMutation.isLoading
                ? "text-gray-500 border-gray-500"
                : "text-yellow-400 hover:text-yellow-200 border-yellow-400 hover:border-yellow-200"
            } backdrop-blur-md border-2 rounded-lg font-semibold transition-colors ease-in-out duration-150`}
          >
            {existingReview ? "Update Review" : "Post Review"}
          </button>
          {existingReview && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault;
                deletePostMutation.mutate();
              }}
              disabled={deletePostMutation.isLoading}
              className={`p-2 my-2 text-xl self-start ${
                deletePostMutation.isLoading
                  ? "text-gray-500 border-gray-500"
                  : "text-yellow-400 hover:text-yellow-200 border-yellow-400 hover:border-yellow-200"
              } backdrop-blur-md border-2 rounded-lg font-semibold transition-colors ease-in-out duration-150`}
            >
              {"Delete Review"}
            </button>
          )}
          <button
            type="button"
            className="p-2 my-2 text-xl self-start text-red-600 hover:text-red-400 border-red-600 hover:border-red-400 backdrop-blur-md border-2 rounded-lg font-semibold transition-colors ease-in-out duration-150"
            onClick={(e) => {
              e.preventDefault();
              setToken("");
            }}
          >
            {"Log out"}
          </button>
          <button
            type="button"
            className="p-2 my-2 text-xl self-start text-red-600 hover:text-red-400 border-red-600 hover:border-red-400 backdrop-blur-md border-2 rounded-lg font-semibold transition-colors ease-in-out duration-150"
            onClick={(e) => {
              e.preventDefault();
              deleteAccountMutation.mutate();
            }}
          >
            {"Delete Account"}
          </button>
        </div>
      </div>
    </form>
  );
}
