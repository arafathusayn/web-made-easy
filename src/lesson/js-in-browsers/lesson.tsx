import { useReducer, lazy, Suspense, useCallback, memo } from "react";
import { MethodCard } from "@/components/MethodCard";
import { Hero } from "@/components/Hero";
import { ADVANCED_METHODS, CORE_METHODS } from "./constants";

// Lazy load below-the-fold components
const AdvancedMethods = lazy(() =>
  import("@/components/AdvancedMethods").then(({ AdvancedMethods }) => ({
    default: AdvancedMethods,
  })),
);
const SecurityNotice = lazy(() =>
  import("@/components/SecurityNotice").then(({ SecurityNotice }) => ({
    default: SecurityNotice,
  })),
);
const Footer = lazy(() =>
  import("@/components/Footer").then(({ Footer }) => ({ default: Footer })),
);
const Quote = lazy(() =>
  import("@/components/Quote").then(({ Quote }) => ({ default: Quote })),
);

const copyToClipboard = (text: string) => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).catch(() => {
      console.log("Clipboard access not available");
    });
  } else {
    console.log("Code copied (clipboard not available in this environment)");
  }
};

// State for Article component (core methods)
type ArticleAction = { type: "SET_ACTIVE_EXAMPLE"; payload: string | null };

function articleReducer(
  state: string | null,
  action: ArticleAction,
): string | null {
  switch (action.type) {
    case "SET_ACTIVE_EXAMPLE":
      return action.payload;
    default:
      action.type satisfies never;
      return state;
  }
}

// State for AdvancedMethodsWithData component
type AdvancedAction = { type: "TOGGLE_ADVANCED" };

function advancedReducer(state: boolean, action: AdvancedAction): boolean {
  switch (action.type) {
    case "TOGGLE_ADVANCED":
      return !state;
    default:
      action.type satisfies never;
      return state;
  }
}

export function Article() {
  const [activeExample, dispatch] = useReducer(articleReducer, null);

  const handleExampleClick = useCallback(
    (id: string, event: React.MouseEvent) => {
      dispatch({
        type: "SET_ACTIVE_EXAMPLE",
        payload: activeExample === id ? null : id,
      });
      // Remove focus to hide outline after click
      (event.currentTarget as HTMLElement).blur();
    },
    [activeExample],
  );

  return (
    <div className="min-h-screen bg-gray-50 p-1 md:p-6 text-xs md:text-sm">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-4 md:p-8 mb-8">
          <Hero />

          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CORE_METHODS.map((method, index) => (
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

          <AdvancedMethodsWithData />

          <Suspense fallback={<div className="py-4" />}>
            <SecurityNotice />
          </Suspense>

          <Suspense fallback={<div className="py-4" />}>
            <Footer />
          </Suspense>
        </div>

        <Suspense fallback={<div className="py-4" />}>
          <Quote />
        </Suspense>
      </div>
    </div>
  );
}

const AdvancedMethodsWithData = memo(function AdvancedMethodsWithData() {
  const [isAdvancedOpen, dispatch] = useReducer(advancedReducer, false);

  const handleToggle = useCallback(() => {
    dispatch({ type: "TOGGLE_ADVANCED" });
  }, []);

  return (
    <Suspense fallback={<div className="py-4" />}>
      <AdvancedMethods
        isOpen={isAdvancedOpen}
        onToggle={handleToggle}
        methods={ADVANCED_METHODS}
      />
    </Suspense>
  );
});

export default Article;
