import React from "react";

export function LoadingPage() {
  return (
    <div className="w-[90%] h-screen flex-col flex justify-center items-center absolute gap-2">
      <span className="inline-block animate-spin border-4 border-black border-t-transparent rounded-full w-10 h-10" />
      <h1 className="text-4xl">Sedang Memuat...</h1>
    </div>
  );
}
