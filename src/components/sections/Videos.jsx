import React, { useState } from 'react';
import { Play, Clock } from 'lucide-react';
import Section from '../ui/Section';
import Card, { CardContent } from '../ui/Card';
import VideoModal from '../ui/VideoModal';
import { VIDEO_ITEMS } from '../../constants/data';

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <>
      <Section 
        id="videos"
        title="Video"
        subtitle="Watch my makeup and hair styling videos"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {VIDEO_ITEMS.map((video) => (
            <Card key={video.id} hoverable className="cursor-pointer group">
              <div 
                className="relative"
                onClick={() => setSelectedVideo(video)}
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-48 object-cover portfolio-image"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="video-play-button bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg text-accent transform scale-100 group-hover:scale-110 transition-transform duration-300">
                    <Play className="ml-1" size={24} />
                  </div>
                </div>
                
                {/* Duration Badge */}
                {video.duration && (
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded flex items-center space-x-1">
                    <Clock size={12} />
                    <span>{video.duration}</span>
                  </div>
                )}
                
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                  Click to watch
                </div>
              </div>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2 text-secondary">{video.title}</h3>
                <p className="text-gray-600 line-clamp-2">{video.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        video={selectedVideo}
      />
    </>
  );
};

export default Videos;