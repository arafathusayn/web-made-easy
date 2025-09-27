import { useReducer } from "react";
import { Terminal, Bookmark, EarthIcon, Code } from "lucide-react";
import { MethodCard } from "../../components/MethodCard";
import { AdvancedMethods } from "../../components/AdvancedMethods";
import { Hero } from "../../components/Hero";
import { SecurityNotice } from "../../components/SecurityNotice";
import { Footer } from "../../components/Footer";
import { Quote } from "../../components/Quote";

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
      example: 'console.log("Hello Console!");\ndocument.title = "Modified!";',
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
      category: "Webpage Context",
      methods: [
        "Inline Script Tags",
        "External JavaScript Files",
        "Dynamically Injected Scripts",
      ],
    },
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
        "scripting.executeScript() API",
        "devtools.inspectedWindow.eval()",
        "chrome.userScripts API",
      ],
    },
    {
      category: "Userscripts",
      methods: ["Tampermonkey/Greasemonkey Userscripts"],
    },
    {
      category: "Extensions with Custom JS",
      methods: ["Resource Override Extension", "Shortkeys Extension"],
    },
  ];

  const handleExampleClick = (id: string, event: React.MouseEvent) => {
    dispatch({
      type: "SET_ACTIVE_EXAMPLE",
      payload: activeExample === id ? null : id,
    });
    // Remove focus to hide outline after click
    (event.currentTarget as HTMLElement).blur();
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
    <div className="min-h-screen bg-gray-50 p-1 md:p-6 text-xs md:text-sm">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 md:p-8 mb-8">
          <Hero />

          {/* Core Methods */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreMethods.map((method, index) => (
                <MethodCard
                  key={method.id}
                  method={method}
                  index={index}
                  isExpanded={activeExample === method.id}
                  onToggle={handleExampleClick}
                  onCopy={copyToClipboard}
                />
              ))}
            </div>
          </div>

          <AdvancedMethods
            isOpen={isAdvancedOpen}
            onToggle={() => dispatch({ type: "TOGGLE_ADVANCED" })}
            methods={advancedMethods}
          />

          <SecurityNotice />

          <Footer />
        </div>

        <Quote />
      </div>
    </div>
  );
}

export default Article;
