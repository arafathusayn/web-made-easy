import { MessageCircleWarningIcon, Settings } from "lucide-react";

export function SecurityNotice() {
  return (
    <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200 mb-8">
      <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
        <div className="bg-yellow-500 p-2 rounded-lg mr-3 shadow-sm">
          <MessageCircleWarningIcon className="w-6 h-6 text-white" />
        </div>
        Security Best Practices
      </h3>
      <p className="text-slate-700 leading-relaxed">
        Always verify JavaScript code before execution. Some methods can access
        sensitive data. Only use trusted sources and review scripts carefully.
        Start with DevTools Console and Snippets for learning.
      </p>
    </div>
  );
}
