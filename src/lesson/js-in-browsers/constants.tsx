import { Terminal, Bookmark, EarthIcon, Code } from "lucide-react";

export const PAGE_TITLE = "Writing JavaScript in Web Browsers";

export const CORE_METHODS = [
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

export const ADVANCED_METHODS = [
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
