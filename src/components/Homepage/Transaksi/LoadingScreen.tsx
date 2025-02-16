import React from "react";

export function LoadingScreen() {
  return (
    <div className="w-full h-[90%] bg-black/30 absolute flex justify-center items-center top-10">
      <span className="inline-block animate-spin border-2 border-white border-t-transparent rounded-full w-20 h-20" />
    </div>
  );
}
