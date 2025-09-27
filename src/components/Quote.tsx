import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function Quote() {
  return (
    <motion.div
      className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 rounded-2xl p-8 mb-8 border-2 border-purple-100 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-200/30 to-blue-200/30 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [360, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Quote content */}
      <div className="relative z-10">
        {/* Quote text */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="relative">
            <span className="absolute -top-4 -left-8 text-6xl md:text-7xl text-purple-300/40 font-serif select-none">
              "
            </span>
            <p className="text-2xl md:text-3xl font-light text-gray-800 mb-6 leading-relaxed px-8">
              <span className="bg-gradient-to-r from-purple-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent font-medium">
                {'"All the best!"'}
              </span>
            </p>
            <span className="absolute -bottom-8 -right-8 text-6xl md:text-7xl text-purple-300/40 font-serif select-none rotate-180 inline-block">
              "
            </span>
          </div>

          {/* Signature */}
          <motion.div
            className="flex items-center justify-center space-x-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-300"></div>
            <div className="flex items-center space-x-2">
              <span className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Arafat
              </span>
            </div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-300"></div>
          </motion.div>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-6 left-6 w-2 h-2 bg-purple-300 rounded-full opacity-60"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-12 right-8 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-50"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-8 left-12 w-1 h-1 bg-indigo-300 rounded-full opacity-70"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
    </motion.div>
  );
}
