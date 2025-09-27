import { useReducer } from "react";
import {
  ChevronDown,
  ChevronUp,
  Code,
  Terminal,
  Bookmark,
  Settings,
  Zap,
  EarthIcon,
} from "lucide-react";

const initialState = {
  isAdvancedOpen: false,
  activeExample: null as string | null,
};

type State = typeof initialState;

type Action =
  | { type: "TOGGLE_ADVANCED" }
  | { type: "SET_ACTIVE_EXAMPLE"; payload: string | null };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "TOGGLE_ADVANCED":
      return { ...state, isAdvancedOpen: !state.isAdvancedOpen };
    case "SET_ACTIVE_EXAMPLE":
      return { ...state, activeExample: action.payload };
    default:
      action satisfies never;
      return state;
  }
}

export function Article() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { isAdvancedOpen, activeExample } = state;

  const coreMethods = [
    {
      id: "address-bar",
      number: 1,
      title: "Address Bar",
      icon: <EarthIcon className="w-6 h-6" />,
      description: "Execute JavaScript directly in the browser address bar",
      example: 'javascript:alert("Hi Mom!")',
      usage: "Type in address bar and press Enter",
      gradient: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      id: "bookmarklets",
      number: 2,
      title: "Bookmarklets",
      icon: <Bookmark className="w-6 h-6" />,
      description: "Save JavaScript code as bookmarks for one-click execution",
      example:
        'javascript:let x = confirm("Leaving me? 🥹"); x ? window.open("https://example.com") : alert("Thanks for staying!");',
      usage: "Save as bookmark, click to execute",
      gradient: "from-emerald-600 to-emerald-700",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
    {
      id: "console",
      number: 3,
      title: "DevTools Console",
      icon: <Terminal className="w-6 h-6" />,
      description: "Interactive REPL for real-time JavaScript execution",
      example: 'console.log("Hello Console!"); document.title = "Modified!";',
      usage: "F12 → Console tab → Type code → Enter",
      gradient: "from-indigo-600 to-indigo-700",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
    },
    {
      id: "snippets",
      number: 4,
      title: "DevTools Snippets",
      icon: <Code className="w-6 h-6" />,
      description: "Save and run reusable code snippets in DevTools",
      example: `// Snippet: Page Info
console.log({
  title: document.title,
  url: location.href,
  links: document.links.length
});`,
      usage: "F12 → Sources → Snippets → New snippet → Ctrl+Enter",
      gradient: "from-slate-600 to-slate-700",
      bgColor: "bg-slate-50",
      borderColor: "border-slate-200",
    },
  ];

  const advancedMethods = [
    {
      category: "DevTools Advanced",
      methods: [
        "Local Overrides",
        "Inline Script Debugging",
        "Filesystem/Workspace",
      ],
    },
    {
      category: "Chrome Extensions",
      methods: [
        "Content Scripts",
        "Background Scripts/Service Workers",
        "Popup Page Scripts",
        "Options/Settings Page Scripts",
        "chrome.scripting.executeScript() API",
        "chrome.devtools.inspectedWindow.eval() API",
        "chrome.userScripts API",
      ],
    },
    {
      category: "Userscripts",
      methods: ["Tampermonkey/Greasemonkey Userscripts"],
    },
    {
      category: "Webpage Context",
      methods: [
        "Inline Script Tags",
        "External JavaScript Files",
        "Dynamically Injected Scripts",
      ],
    },
    {
      category: "Extensions with Custom JS",
      methods: ["Resource Override Extension", "Shortkeys Extension"],
    },
  ];

  const handleExampleClick = (id: string) => {
    dispatch({
      type: "SET_ACTIVE_EXAMPLE",
      payload: activeExample === id ? null : id,
    });
  };

  const copyToClipboard = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).catch(() => {
        console.log("Clipboard access not available");
      });
    } else {
      console.log("Code copied (clipboard not available in this environment)");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
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

          {/* Core Methods */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreMethods.map((method) => (
                <div
                  key={method.id}
                  className={`relative group cursor-pointer transition-all duration-200 hover:shadow-xl`}
                  onClick={() => handleExampleClick(method.id)}
                >
                  {/* Card */}
                  <div
                    className={`${method.bgColor} ${method.borderColor} border-2 rounded-xl p-6 hover:border-gray-300 transition-all duration-200`}
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
                      <p className="text-gray-500 text-sm mb-1 font-medium">
                        How to use:
                      </p>
                      <p className="text-gray-900 font-medium">
                        {method.usage}
                      </p>
                    </div>

                    {/* Click indicator */}
                    <div className="text-center">
                      <span className="text-gray-500 text-sm font-medium group-hover:text-gray-700 transition-colors">
                        Click to view example code →
                      </span>
                    </div>

                    {/* Example Code (Expanded) */}
                    {activeExample === method.id && (
                      <div className="mt-6 bg-gray-900 rounded-lg p-5 border border-gray-200">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-green-400 text-sm font-semibold flex items-center">
                            <Code className="w-4 h-4 mr-2" />
                            Example Code:
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              copyToClipboard(method.example);
                            }}
                            className="text-gray-400 hover:text-white text-xs px-3 py-1 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors border border-gray-700"
                          >
                            Copy
                          </button>
                        </div>
                        <pre className="text-green-300 text-sm overflow-x-auto whitespace-pre-wrap font-mono">
                          {method.example}
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Advanced Methods */}
          <div className="mb-8">
            <button
              onClick={() => dispatch({ type: "TOGGLE_ADVANCED" })}
              className="w-full bg-gray-50 hover:bg-gray-100 rounded-xl p-6 mb-6 transition-all duration-200 border-2 border-gray-200 hover:border-gray-300 group"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-gray-900 flex items-center">
                  <div className="bg-gradient-to-r from-slate-600 to-slate-700 p-2 rounded-lg mr-4 shadow-sm">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  Advanced Methods
                  <span className="ml-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-sm font-semibold shadow-sm">
                    +16 more
                  </span>
                </h2>
                <div className="transform transition-transform duration-200 group-hover:scale-110">
                  {isAdvancedOpen ? (
                    <ChevronUp className="w-7 h-7 text-gray-600" />
                  ) : (
                    <ChevronDown className="w-7 h-7 text-gray-600" />
                  )}
                </div>
              </div>
            </button>

            {isAdvancedOpen && (
              <div className="bg-gray-50 rounded-xl p-8 border-2 border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {advancedMethods.map((category, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-all duration-200 hover:border-gray-300"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-3 border-b border-gray-200 flex items-center">
                        <span className="w-3 h-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mr-3"></span>
                        {category.category}
                      </h3>
                      <ul className="space-y-3">
                        {category.methods.map((method, methodIdx) => (
                          <li
                            key={methodIdx}
                            className="flex items-start group"
                          >
                            <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-blue-500 transition-colors"></span>
                            <span className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors">
                              {method}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

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
                        <span className="font-semibold text-blue-900">
                          • Type:
                        </span>{" "}
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
              </div>
            )}
          </div>

          {/* Security Notice */}
          <div className="bg-slate-50 rounded-xl p-6 border-2 border-slate-200 mb-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
              <div className="bg-gradient-to-r from-slate-600 to-slate-700 p-2 rounded-lg mr-3 shadow-sm">
                <Settings className="w-5 h-5 text-white" />
              </div>
              Security Best Practices
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Always verify JavaScript code before execution. Some methods can
              access sensitive data. Only use trusted sources and review scripts
              carefully. Start with DevTools Console and Snippets for learning.
            </p>
          </div>

          {/* Footer Stats */}
          <div className="text-center">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full px-6 py-3 shadow-lg">
              <Zap className="w-5 h-5 mr-2" />
              <span className="font-semibold">
                Master all <span className="font-bold">20 techniques</span> to
                become a JavaScript expert
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
