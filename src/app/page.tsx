'use client'



import { motion } from "framer-motion"

// React Server Components


export default function Home() {
  return (
    
    <div className = 'flex justify-center items-center h-screen'>
      <motion.button
      className = 'bg-orange-500 rounded px-2'
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.5 }}
>
  Real
</motion.button>
    </div>
  
  );
}
