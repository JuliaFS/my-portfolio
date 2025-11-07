import { useEffect } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";

const useUserActivityTracker = () => {
  useEffect(() => {
    // Generate a short anonymous session ID for each visitor (not stored)
    const sessionId = crypto.randomUUID();

    const handleClick = async (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const clickable = target.closest("a, button, div, span");

      // Basic element info
      const elementInfo = {
        tag: clickable?.tagName || target.tagName,
        id: clickable?.id || target.id,
        classes: clickable?.className || target.className,
        content:
          clickable?.textContent?.slice(0, 100) ||
          target.textContent?.slice(0, 100),
        icon: clickable?.getAttribute("data-icon") || null,
        href: clickable instanceof HTMLAnchorElement ? clickable.href : null,
        time: new Date().toISOString(),
        sessionId, // anonymous session identifier
        userAgent: navigator.userAgent, // info about browser + OS
        language: navigator.language,
        screen: `${window.screen.width}x${window.screen.height}`,
        referrer: document.referrer || "direct",
      };

      try {
        await addDoc(collection(db, "user_clicks"), {
          ...elementInfo,
          createdAt: serverTimestamp(),
        });
        console.log("📨 Sent click data to Firebase:", elementInfo);
      } catch (error) {
        console.error("❌ Failed to write click to Firebase:", error);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
};

export default useUserActivityTracker;

