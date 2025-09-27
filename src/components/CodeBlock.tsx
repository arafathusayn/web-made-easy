import { useState, useLayoutEffect } from "react";
import { codeToHtml } from "shiki";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = "javascript" }: CodeBlockProps) {
  const [highlightedCode, setHighlightedCode] = useState<string>("");

  useLayoutEffect(() => {
    const highlightCode = async () => {
      try {
        const html = await codeToHtml(code, {
          lang: language,
          theme: "dracula",
        });
        setHighlightedCode(html);
      } catch (error) {
        console.error("Error highlighting code:", error);
        setHighlightedCode(`<pre><code>${code}</code></pre>`);
      }
    };

    highlightCode();
  }, [code, language]);

  return (
    <div
      className="shiki-container text-sm overflow-x-auto"
      dangerouslySetInnerHTML={{ __html: highlightedCode }}
      style={{
        background: "transparent",
      }}
    />
  );
}
