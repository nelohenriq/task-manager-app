"use client";

import React from "react";
import { GlobalProvider } from "@/app/(context)/globalProvider";

interface Props {
  children: React.ReactNode;
}

function ContextProvider({ children }: Props) {
  return <GlobalProvider>{children}</GlobalProvider>;
}

export default ContextProvider;
