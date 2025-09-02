import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen text-white py-32"
     style={{
  backgroundImage: "url('/HeroSection.png')",
   }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      <div className="relative container mx-auto px-6 flex-col">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl flex flex-row gap-1 font-extrabold mb-6"
        >
          Welcome to Vastram
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl max-w-2xl mb-8"
        >
          Explore all pages – Services, About, Portfolio, and Contact.  
          Navigate easily and discover what I can do for you!
        </motion.p>

        {/* Animated Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-wrap gap-4 justify-center"
        >
         
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
