"use client";

import Script from "next/script";
import { useEffect } from "react";
import {
  INSTAGRAM_HOME_EMBED_PERMALINKS,
  instagramBlockquoteHtml,
} from "@/data/instagramHomeEmbeds";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

function processEmbeds() {
  window.instgrm?.Embeds.process();
}

export default function InstagramEmbedSection() {
  useEffect(() => {
    if (window.instgrm) processEmbeds();
  }, []);

  return (
    <>
      <div className="row justify-content-center g-4 gx-lg-5">
        {INSTAGRAM_HOME_EMBED_PERMALINKS.map((permalink) => (
          <div
            key={permalink}
            className="col-12 col-md-6 col-xl-4 d-flex justify-content-center"
          >
            <div
              className="instagram-embed-slot w-100 d-flex justify-content-center"
              dangerouslySetInnerHTML={{
                __html: instagramBlockquoteHtml(permalink),
              }}
            />
          </div>
        ))}
      </div>
      <Script
        id="instagram-embed-js"
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={processEmbeds}
      />
    </>
  );
}
