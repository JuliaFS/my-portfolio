import { useEffect } from "react";
import {
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  increment,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../lib/firebase";

const useUserActivityTracker = () => {
  useEffect(() => {
    // Generate or reuse a unique session ID per tab
    let sessionId = sessionStorage.getItem("sessionId");
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      sessionStorage.setItem("sessionId", sessionId);
    }

    const sessionRef = doc(db, "user_sessions", sessionId);

    const initializeSession = async () => {
      if (sessionStorage.getItem("sessionInitialized")) return;

      // Fetch location
      let userLocation = { country: "Unknown", city: "Unknown" };
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        userLocation = {
          country: data.country_name || "Unknown",
          city: data.city || "Unknown",
        };
      } catch (error) {
        console.error("Could not fetch location:", error);
      }

      // 1️⃣ Create session doc
      await setDoc(
        sessionRef,
        {
          sessionId,
          createdAt: serverTimestamp(),
          userAgent: navigator.userAgent,
          screen: `${window.screen.width}x${window.screen.height}`,
          referrer: document.referrer || "direct",
          country: userLocation.country,
          city: userLocation.city,
          clicks: [],
        },
        { merge: true }
      );

      // 2️⃣ Increment total visits
      const totalRef = doc(db, "analytics", "total_visits"); // ✅ document
      await updateDoc(totalRef, { count: increment(1) }).catch(async () => {
        await setDoc(totalRef, { count: 1 });
      });

      // 3️⃣ Increment daily visits
      const today = new Date().toISOString().split("T")[0];
      const dailyRef = doc(db, "daily_visits", today); // Path: /daily_visits/{date}
      await updateDoc(dailyRef, { count: increment(1) }).catch(async () => {
        await setDoc(dailyRef, { count: 1 });
      });

      sessionStorage.setItem("sessionInitialized", "true");
    };

    initializeSession();

    // Handle clicks
    const handleClick = async (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const clickable = target.closest("a, button, div, span");

      const clickData = {
        content: clickable?.textContent?.slice(0, 100) || target.textContent?.slice(0, 100),
        icon: clickable?.getAttribute("data-icon") || null,
        href: clickable instanceof HTMLAnchorElement ? clickable.href : null,
        time: new Date().toISOString(),
      };

      try {
        await updateDoc(sessionRef, {
          clicks: arrayUnion(clickData),
        });
      } catch (error) {
        console.error("❌ Error updating session clicks:", error);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
};

export default useUserActivityTracker;




