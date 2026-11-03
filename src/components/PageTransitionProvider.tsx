"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";

/**
 * PageTransitionProvider
 *
 * Implements a synchronized, fluid luminous circular wave page transition across the portfolio:
 * 1. Wave emerges immediately from bottom-center (50% 100%) and expands to 100% viewport coverage.
 * 2. At the exact moment the viewport is fully covered, Next.js client-side navigation is triggered.
 * 3. The curtain remains 100% opaque until the destination page is mounted and painted by the browser.
 * 4. The destination page is then smoothly unveiled via the reveal animation.
 * 5. State resets cleanly after every navigation so repeated transitions work seamlessly.
 */
export default function PageTransitionProvider() {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const isTransitioningRef = useRef<boolean>(false);
  const safetyTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const routeCommitResolveRef = useRef<(() => void) | null>(null);

  // Helper to completely cancel all active animations and restore overlay to idle state
  const resetOverlayState = useCallback(() => {
    const overlay = overlayRef.current;
    if (overlay) {
      try {
        overlay.getAnimations().forEach((anim) => anim.cancel());
      } catch {
        // Fallback for environments with partial Web Animations API support
      }
      overlay.style.visibility = "hidden";
      overlay.style.pointerEvents = "none";
      overlay.style.clipPath = "circle(0% at 50% 100%)";
      overlay.style.opacity = "0";
      overlay.style.transform = "none";
    }

    if (safetyTimeoutRef.current) {
      clearTimeout(safetyTimeoutRef.current);
      safetyTimeoutRef.current = null;
    }

    if (routeCommitResolveRef.current) {
      routeCommitResolveRef.current = null;
    }

    isTransitioningRef.current = false;
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      resetOverlayState();
    };
  }, [resetOverlayState]);

  // Synchronize route change: When pathname updates, resolve the pending route commit
  // after 2 requestAnimationFrames to ensure React DOM commit and browser paint are complete.
  useEffect(() => {
    if (routeCommitResolveRef.current) {
      const resolveFn = routeCommitResolveRef.current;
      routeCommitResolveRef.current = null;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          resolveFn();
        });
      });
      return;
    }

    // If pathname changed outside an active transition, ensure overlay is cleanly idle
    if (!isTransitioningRef.current) {
      resetOverlayState();
    }
  }, [pathname, resetOverlayState]);

  const triggerTransition = useCallback(
    async (targetHref: string) => {
      // Guard against concurrent clicks or rapid triggers
      if (isTransitioningRef.current) return;
      isTransitioningRef.current = true;

      const overlay = overlayRef.current;
      if (!overlay) {
        router.push(targetHref);
        isTransitioningRef.current = false;
        return;
      }

      // Safety watchdog: ensure transition lock NEVER remains stuck under any circumstance
      if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
      safetyTimeoutRef.current = setTimeout(() => {
        resetOverlayState();
      }, 2000);

      try {
        // Start prefetching destination page chunks in background while wave expands
        try {
          router.prefetch(targetHref);
        } catch {}

        // Cancel any lingering animations and reset styles cleanly
        try {
          overlay.getAnimations().forEach((anim) => anim.cancel());
        } catch {}

        const prefersReducedMotion =
          typeof window !== "undefined" &&
          window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) {
          overlay.style.clipPath = "none";
          overlay.style.visibility = "visible";
          overlay.style.pointerEvents = "all";
          overlay.style.opacity = "0";

          const fadeIn = overlay.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: 150,
            easing: "ease-out",
          });
          await fadeIn.finished.catch(() => {});

          // Navigate and wait for route commit
          const targetPath = targetHref.split("?")[0].split("#")[0];
          if (targetPath !== pathname) {
            await new Promise<void>((resolve) => {
              routeCommitResolveRef.current = resolve;
              router.push(targetHref);
              setTimeout(resolve, 800);
            });
          } else {
            router.push(targetHref);
            await new Promise<void>((r) => requestAnimationFrame(() => requestAnimationFrame(() => r())));
          }

          if (!targetHref.includes("#")) {
            window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
          }

          const fadeOut = overlay.animate([{ opacity: 1 }, { opacity: 0 }], {
            duration: 150,
            easing: "ease-in",
          });
          await fadeOut.finished.catch(() => {});

          resetOverlayState();
          return;
        }

        // 1. Prepare overlay for circular wave surge
        overlay.style.visibility = "visible";
        overlay.style.pointerEvents = "all";
        overlay.style.opacity = "1";
        overlay.style.transform = "none";
        overlay.style.clipPath = "circle(0% at 50% 100%)";

        // 2. Expand fluid circular light wave until it completely blankets the viewport
        const expandAnimation = overlay.animate(
          [
            { clipPath: "circle(0% at 50% 100%)" },
            { clipPath: "circle(150% at 50% 100%)" },
          ],
          {
            duration: 440,
            easing: "cubic-bezier(0.65, 0, 0.25, 1)",
          }
        );

        // Wait until viewport is fully covered
        await expandAnimation.finished.catch(() => {});

        // Keep screen 100% veiled so the old page is never visible during navigation
        overlay.style.clipPath = "circle(150% at 50% 100%)";
        overlay.style.opacity = "1";

        // 3. At the exact moment the screen is fully covered, navigate to destination route
        const targetPath = targetHref.split("?")[0].split("#")[0];
        if (targetPath !== pathname) {
          await new Promise<void>((resolve) => {
            routeCommitResolveRef.current = resolve;
            router.push(targetHref);
            // Safety timeout in case Next.js route change takes unusually long
            setTimeout(resolve, 900);
          });
        } else {
          router.push(targetHref);
          await new Promise<void>((r) => requestAnimationFrame(() => requestAnimationFrame(() => r())));
        }

        // Reset scroll position to top while veiled
        if (!targetHref.includes("#")) {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
        }

        // 4. Reveal destination page now that it is mounted and painted
        const revealAnimation = overlay.animate(
          [
            { opacity: 1, transform: "scale(1)" },
            { opacity: 0, transform: "scale(1.015)" },
          ],
          {
            duration: 250,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          }
        );

        await revealAnimation.finished.catch(() => {});
      } catch (err) {
        console.error("Transition error:", err);
      } finally {
        resetOverlayState();
      }
    },
    [router, pathname, resetOverlayState]
  );

  // Global click interception on all internal navigation anchors across the portfolio
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleDocumentClick = (e: MouseEvent) => {
      // Ignore modified clicks (Ctrl, Cmd, Shift, Alt) or non-left buttons
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
        return;
      }

      // Find closest anchor
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ignore external links, mailto, tel, downloads, or target="_blank"
      if (
        anchor.target === "_blank" ||
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        anchor.hasAttribute("download")
      ) {
        return;
      }

      // Ignore anchor hash jumps on the same page (#main-content)
      if (href.startsWith("#")) return;

      // Check origin
      const targetUrl = new URL(anchor.href, window.location.href);
      if (targetUrl.origin !== window.location.origin) return;

      // Ignore if clicking the exact current URL without query/hash changes
      if (
        targetUrl.pathname === window.location.pathname &&
        targetUrl.search === window.location.search &&
        targetUrl.hash === window.location.hash
      ) {
        return;
      }

      // Prevent instant snap navigation and execute synchronized luminous circular transition
      e.preventDefault();
      e.stopPropagation();
      triggerTransition(targetUrl.pathname + targetUrl.search + targetUrl.hash);
    };

    // Browser back and forward (popstate) navigation support
    const handlePopState = () => {
      if (isTransitioningRef.current || !overlayRef.current) return;
      isTransitioningRef.current = true;
      const overlay = overlayRef.current;

      try {
        overlay.getAnimations().forEach((anim) => anim.cancel());
      } catch {}

      overlay.style.visibility = "visible";
      overlay.style.pointerEvents = "none";
      overlay.style.clipPath = "circle(150% at 50% 100%)";
      overlay.style.opacity = "1";

      const fade = overlay.animate(
        [
          { opacity: 0.9, transform: "scale(1)" },
          { opacity: 0, transform: "scale(1.015)" },
        ],
        {
          duration: 260,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        }
      );

      fade.finished
        .catch(() => {})
        .finally(() => {
          resetOverlayState();
        });
    };

    document.addEventListener("click", handleDocumentClick, { capture: true });
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("click", handleDocumentClick, {
        capture: true,
      });
      window.removeEventListener("popstate", handlePopState);
    };
  }, [triggerTransition, resetOverlayState]);

  return (
    <div
      ref={overlayRef}
      className="circular-page-transition-curtain"
      aria-hidden="true"
    >
      <div className="circular-page-transition-burst" />
    </div>
  );
}
