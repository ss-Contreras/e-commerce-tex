'use client';

import { ReactNode, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface ClientLayoutWrapperProps {
  children: ReactNode;
}

export function ClientLayoutWrapper({ children }: ClientLayoutWrapperProps) {
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;


  return (
    <AnimatePresence mode="wait">
      <motion.main
        className="mx-auto max-w-7xl px-4 py-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="min-h-[calc(100vh-140px)]">{children}</div>
      </motion.main>
    </AnimatePresence>
  );
}