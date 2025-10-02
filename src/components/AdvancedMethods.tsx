import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Settings, Zap } from "lucide-react";
import { useRef } from "react";

interface AdvancedMethod {
  category: string;
  methods: string[];
}

interface AdvancedMethodsProps {
  isOpen: boolean;
  onToggle: () => void;
  methods: AdvancedMethod[];
}

export function AdvancedMethods({
  isOpen,
  onToggle,
  methods,
}: AdvancedMethodsProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleAnimationComplete = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <div className="mb-8">
      <motion.button
        onClick={onToggle}
        className="w-full bg-gray-50 hover:bg-gray-100 rounded-xl p-6 mb-6 transition-all duration-200 border-2 border-gray-200 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group"
        whileHover={{ scale: 1.005, transition: { duration: 0.15 } }}
        whileTap={{ scale: 0.995, transition: { duration: 0.1 } }}
      >
        <div className="flex items-center justify-between">
          <h2 className="text-sm md:text-2xl font-semibold text-gray-900 flex items-center">
            <div className="bg-gradient-to-r from-slate-600 to-slate-700 p-2 rounded-lg mr-4 shadow-sm">
              <Settings className="w-6 h-6 text-white" />
            </div>
            Advanced Methods
            {methods.reduce((sum, cat) => sum + cat.methods.length, 0) > 0 && (
              <span className="ml-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-xs md:text-sm font-semibold shadow-sm">
                +{methods.reduce((sum, cat) => sum + cat.methods.length, 0)}{" "}
                more
              </span>
            )}
          </h2>
          <motion.div
            className="transform transition-transform duration-200 group-hover:scale-110"
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
          >
            <ChevronDown className="w-7 h-7 text-gray-600" />
          </motion.div>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={contentRef}
            className="bg-gray-50 rounded-xl p-2 md:p-8 border-2 border-gray-200 overflow-hidden"
            initial={{ opacity: 0, height: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              height: "auto",
              scale: 1,
              transition: {
                duration: 0.4,
                ease: "easeOut",
              },
            }}
            onAnimationComplete={handleAnimationComplete}
            exit={{
              opacity: 0,
              height: 0,
              scale: 0.95,
              transition: {
                duration: 0.3,
                ease: "easeIn",
              },
            }}
          >
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              {methods.map((category, idx) => (
                <motion.div
                  key={category.category}
                  className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-all duration-200 hover:border-gray-300"
                  initial={{ opacity: 0, y: 25, scale: 0.9 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      delay: 0.2 + idx * 0.1,
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    },
                  }}
                  whileHover={{
                    scale: 1.03,
                    y: -6,
                    boxShadow: "0 20px 30px -10px rgba(0, 0, 0, 0.2)",
                    transition: { duration: 0.2 },
                  }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200 flex items-center">
                    <span className="w-3 h-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mr-3"></span>
                    {category.category}
                  </h3>
                  <ul className="space-y-3">
                    {category.methods.map((method) => (
                      <li
                        key={`${category.category}-${method}`}
                        className="flex items-start group"
                      >
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-blue-500 transition-colors"></span>
                        <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                          {method}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-blue-600" />
                Key Learning Points:
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800">
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold text-blue-900">
                      • Context:
                    </span>{" "}
                    Isolated vs Main world execution
                  </p>
                  <p>
                    <span className="font-semibold text-blue-900">• Type:</span>{" "}
                    Manual vs Automatic execution
                  </p>
                </div>
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold text-blue-900">
                      • Persistence:
                    </span>{" "}
                    One-time vs Cross-page
                  </p>
                  <p>
                    <span className="font-semibold text-blue-900">
                      • Scope:
                    </span>{" "}
                    Single page vs Browser-wide
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
