import { Zap } from "lucide-react";

export function Footer() {
  return (
    <div className="text-center">
      <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full px-6 py-3 shadow-lg">
        <Zap className="w-5 h-5 mr-2" />
        <span className="font-semibold">
          Master all <span className="font-bold">20 techniques</span> to become
          a JavaScript expert
        </span>
      </div>
    </div>
  );
}
