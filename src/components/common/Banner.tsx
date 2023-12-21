import React from "react";

export interface IBanner {
  message: string;
  state: "success" | "error";
}

export default function Banner({ message, state }: IBanner) {
  const isSucces = state === "success";
  const icon = isSucces ? "✅" : "🔥";
  return (
    <p
      className={`p-2 ${isSucces ? "bg-green-300" : "bg-red-300"} rounded-xl w-full  text-center`}
    >{`${icon} ${message}`}</p>
  );
}
