"use client";
import React from "react";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      {children}
    </div>
  );
}
