import { Zap } from "lucide-react";

export function Hero() {
  return (
    <div className="text-center mb-12">
      <div className="flex justify-center mb-6">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-xl shadow-lg">
          <Zap className="w-8 h-8 text-white" />
        </div>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Writing JavaScript in Web Browsers
      </h1>
      <p className="text-xl text-gray-600 mb-4">
        Master all 20 places to run JavaScript code
      </p>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
    </div>
  );
}
