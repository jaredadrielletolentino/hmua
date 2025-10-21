import React from 'react';
import { X, Clock, Play } from 'lucide-react';

const VideoModal = ({ isOpen, onClose, video }) => {
  if (!isOpen || !video) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-secondary">{video.title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors p-2"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 overflow-auto">
          <div className="space-y-6">
            {/* Video Player */}
            <div className="bg-black rounded-lg overflow-hidden">
              <video 
                controls 
                className="w-full h-auto max-h-96"
                poster={video.thumbnail}
              >
                <source src={video.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Video Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                  <p className="text-gray-600 leading-relaxed">{video.description}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Video Details</h4>
                  
                  {video.duration && (
                    <div className="flex items-center space-x-3 mb-3">
                      <Clock size={18} className="text-accent" />
                      <div>
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="font-medium text-gray-800">{video.duration}</p>
                      </div>
                    </div>
                  )}
                  
                  {video.category && (
                    <div className="flex items-center space-x-3">
                      <Play size={18} className="text-accent" />
                      <div>
                        <p className="text-sm text-gray-500">Category</p>
                        <p className="font-medium text-gray-800 capitalize">{video.category}</p>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="bg-accent/10 rounded-lg p-4">
                  <p className="text-sm text-accent">
                    💡 <strong>Pro Tip:</strong> Watch in full screen for the best experience!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;