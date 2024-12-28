import React from 'react';
import { Video } from 'lucide-react';
import VideoPlayer from '../ui/VideoPlayer';

export default function YouTube() {
  return (
    <section id="youtube" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12">Watch How It Works</h2>
        <VideoPlayer
          videoUrl="/demo-video.mp4"
          fallbackYoutubeId="YOUR_YOUTUBE_VIDEO_ID"
          title="Invisible Intercom Demo"
        />
        <div className="mt-8 text-center">
          <a 
            href="https://www.youtube.com/@invisibleintercom9794"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition"
          >
            <Video className="w-5 h-5" />
            More Videos on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}