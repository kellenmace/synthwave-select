import * as React from "react";

export default function YouTubeVideo({ youTubeVideoID }) {
  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${youTubeVideoID}`}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
}
