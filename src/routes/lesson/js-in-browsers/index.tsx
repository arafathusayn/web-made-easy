import { createFileRoute } from "@tanstack/react-router";
import { Article } from "@/lesson/js-in-browsers/lesson";
import { PAGE_TITLE } from "@/lesson/js-in-browsers/constants";

export const Route = createFileRoute("/lesson/js-in-browsers/")({
  component: LessonPage,
  head: () => ({
    meta: [
      {
        title: PAGE_TITLE,
      },
    ],
  }),
});

function LessonPage() {
  return <Article />;
}
