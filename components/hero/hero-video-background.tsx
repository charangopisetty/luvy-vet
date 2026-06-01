"use client";

import { useEffect, useRef } from "react";

const HERO_VIDEO_URL =
  "https://res.cloudinary.com/dnju4ng0i/video/upload/v1780342082/10495799-uhd_4096_2160_25fps_d70r2c.mp4";

export function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncPlayback = () => {
      if (mediaQuery.matches) {
        video.pause();
        return;
      }

      void video.play().catch(() => {
        // Autoplay may be blocked until user interaction.
      });
    };

    syncPlayback();
    mediaQuery.addEventListener("change", syncPlayback);

    return () => mediaQuery.removeEventListener("change", syncPlayback);
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      aria-hidden
    >
      <source src={HERO_VIDEO_URL} type="video/mp4" />
    </video>
  );
}
