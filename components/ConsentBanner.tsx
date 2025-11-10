"use client";

import { useEffect, useState } from "react";

const ConsentBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show only if not dismissed in this session
    const dismissed = sessionStorage.getItem("consentDismissed");
    if (!dismissed) setVisible(true);
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem("consentDismissed", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white text-sm md:text-base flex flex-col md:flex-row items-center justify-between px-4 py-3 shadow-lg">
      <p className="mb-2 md:mb-0 md:mr-4 text-center md:text-left">
        This site collects anonymous click analytics for improvement purposes. No personal data is stored.
      </p>
      <button
        onClick={handleDismiss}
        className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm transition"
      >
        Got it
      </button>
    </div>
  );
};

export default ConsentBanner;
