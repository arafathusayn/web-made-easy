import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { CodeBlock } from "./CodeBlock";

interface Method {
  id: string;
  number: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  example: string;
  usage: string;
  gradient: string;
  bgColor: string;
  borderColor: string;
}

interface MethodCardProps {
  method: Method;
  index: number;
  isExpanded: boolean;
  onToggle: (id: string, event: React.MouseEvent) => void;
  onCopy: (text: string) => void;
}

export function MethodCard({
  method,
  index,
  isExpanded,
  onToggle,
  onCopy,
}: MethodCardProps) {
  return (
    <motion.div
      key={method.id}
      className="relative group cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-xl"
      onClick={(e) => onToggle(method.id, e)}
      tabIndex={0}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.5,
          delay: index * 0.15,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      }}
      whileHover={{
        scale: 1.02,
        y: -8,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.1 },
      }}
    >
      {/* Card */}
      <div
        className={`${method.bgColor} ${method.borderColor} border-2 rounded-xl p-5 md:p-6 hover:border-gray-300 transition-all duration-200`}
      >
        {/* Serial Number Badge */}
        <div className="absolute -top-3 -left-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-100">
          <span className="text-lg font-bold text-gray-900">
            {method.number}
          </span>
        </div>

        {/* Icon and Title */}
        <div className="flex items-center mb-4 mt-2">
          <div
            className={`bg-gradient-to-r ${method.gradient} p-3 rounded-lg shadow-sm mr-4`}
          >
            <div className="text-white">{method.icon}</div>
          </div>
          <h3 className="text-xl font-semibold text-gray-900">
            {method.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-gray-700 mb-4 leading-relaxed">
          {method.description}
        </p>

        {/* Usage Instructions */}
        <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
          <p className="text-gray-500 text-sm mb-1 font-medium">How to use:</p>
          <p className="text-gray-900 font-medium">{method.usage}</p>
        </div>

        {/* Click indicator */}
        <div className="text-center">
          <span className="text-gray-500 text-sm font-medium group-hover:text-gray-700 transition-colors">
            Click to view example code →
          </span>
        </div>

        {/* Example Code (Expanded) */}
        {isExpanded && (
          <div className="mt-6 bg-gray-900 rounded-lg p-5 border border-gray-200">
            <div className="flex justify-between items-center mb-3">
              <span className="text-green-400 text-sm font-semibold flex items-center">
                <Code className="w-4 h-4 mr-2" />
                Example Code:
              </span>
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  onCopy(method.example);
                }}
                className="text-gray-400 hover:text-white text-xs px-3 py-1 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 focus:ring-offset-gray-900"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.1 },
                }}
                whileTap={{
                  scale: 0.98,
                  transition: { duration: 0.05 },
                }}
              >
                Copy
              </motion.button>
            </div>
            <div>
              <CodeBlock code={method.example} language="javascript" />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
