"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * ScrollRevealProvider
 * High-performance global observer that triggers the refined blur-to-sharp
 * reveal animation on all `.blur-reveal-scroll` elements across both window
 * scroll and nested editorial scroll columns (.about-content-column, .project-content-column, etc.).
 */
export default function ScrollRevealProvider() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Respect user's reduced-motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".blur-reveal-scroll").forEach((el) => {
        el.classList.add("is-revealed");
      });
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      document.querySelectorAll(".blur-reveal-scroll").forEach((el) => {
        el.classList.add("is-revealed");
      });
      return;
    }

    const initObservers = () => {
      const elements = Array.from(
        document.querySelectorAll<HTMLElement>(".blur-reveal-scroll:not(.is-revealed)")
      );

      if (elements.length === 0) return null;

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              obs.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -25px 0px",
        }
      );

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("is-revealed");
        } else {
          observer.observe(el);
        }
      });

      return observer;
    };

    // Small timeout to allow the browser to settle the initial paint
    const timer = setTimeout(() => {
      const observer = initObservers();

      // Also listen on nested scroll containers (like .about-content-column, .project-content-column, .contact-content-column)
      const scrollContainers = document.querySelectorAll(
        ".about-content-column, .project-content-column, .work-projects-column, .contact-content-column"
      );

      const handleScroll = () => {
        document
          .querySelectorAll<HTMLElement>(".blur-reveal-scroll:not(.is-revealed)")
          .forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 25 && rect.bottom > 0) {
              el.classList.add("is-revealed");
            }
          });
      };

      scrollContainers.forEach((container) => {
        container.addEventListener("scroll", handleScroll, { passive: true });
      });

      // Safety timeout: ensure no text is left unrevealed if an edge-case viewport occurred
      const safetyTimer = setTimeout(() => {
        document.querySelectorAll(".blur-reveal-scroll:not(.is-revealed)").forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
            el.classList.add("is-revealed");
          }
        });
      }, 1500);

      return () => {
        observer?.disconnect();
        scrollContainers.forEach((container) => {
          container.removeEventListener("scroll", handleScroll);
        });
        clearTimeout(safetyTimer);
      };
    }, 40);

    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);

  return null;
}
