import React from 'react';
import { AlertCircle } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  fallbackYoutubeId?: string;
  title: string;
}

export default function VideoPlayer({ videoUrl, fallbackYoutubeId, title }: VideoPlayerProps) {
  const [error, setError] = React.useState(false);

  if (error && fallbackYoutubeId) {
    return (
      <iframe
        className="w-full h-[500px] mx-auto rounded-lg shadow-lg"
        src={`https://www.youtube-nocookie.com/embed/${fallbackYoutubeId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <div className="relative">
      <video
        className="w-full rounded-lg shadow-lg"
        controls
        controlsList="nodownload" 
        onError={() => setError(true)}
        poster="/video-thumbnail.jpg"
      >
        <source src={videoUrl} type="video/mp4" />
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
            <div className="text-center">
              <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Unable to load video</p>
            </div>
          </div>
        )}
      </video>
    </div>
  );
}