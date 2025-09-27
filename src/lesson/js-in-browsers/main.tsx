import "@/index.css";
import { createRoot } from "react-dom/client";
import { Article } from "./lesson";

function start() {
  const root = createRoot(document.getElementById("root")!);
  root.render(<Article />);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}
