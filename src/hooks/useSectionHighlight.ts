import { useEffect } from "react";

export function useSectionHighlight() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-active");
          } else {
            entry.target.classList.remove("section-active");
          }
        });
      },
      { threshold: 0.25, rootMargin: "-10% 0px -10% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
}
