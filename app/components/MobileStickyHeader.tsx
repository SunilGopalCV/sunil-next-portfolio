"use client";

import { AnimatePresence, motion } from "framer-motion";

type MobileStickyHeaderProps = {
  activeSection: string;
};

const MobileStickyHeader = ({ activeSection }: MobileStickyHeaderProps) => {
  // Capitalize the first letter of the section name
  const title = activeSection.charAt(0).toUpperCase() + activeSection.slice(1);

  return (
    <div className="lg:hidden sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 bg-[rgb(var(--background-start-rgb))] backdrop-blur md:-mx-12 md:px-12">
      <AnimatePresence mode="wait">
        <motion.h2
          key={activeSection}
          className="text-sm font-bold uppercase tracking-widest text-slate-200"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
};

export default MobileStickyHeader;
