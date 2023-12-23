"use client";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";


export default function Loader() {
    const [isLoading, setIsLoading] = useState(true);

  return (
    <div>Loader</div>
  )
}
