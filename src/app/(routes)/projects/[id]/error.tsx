"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="text-center text-red-600">
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
    </div>
  );
}
