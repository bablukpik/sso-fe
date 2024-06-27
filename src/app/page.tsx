"use client";

import React from "react";
import { useGetUserQuery } from "../services/auth-api";

export default function Home() {
  const { data: user, error, isLoading } = useGetUserQuery({});

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading user data</div>;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome, {user?.username}</h1>
    </main>
  );
}
