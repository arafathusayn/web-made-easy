import "@/index.css";

import { Article } from "@/lesson/js-in-browsers/lesson";
import { PAGE_TITLE } from "@/lesson/js-in-browsers/constants";

document.title = PAGE_TITLE;

export function App() {
  return <Article />;
}

export default App;
