import React from 'react';
import { X, Calendar, User } from 'lucide-react';

const ImageModal = ({ isOpen, onClose, item }) => {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-secondary">{item.title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors p-2"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 overflow-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image */}
            <div className="flex justify-center">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-auto max-h-96 lg:max-h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {item.client && (
                  <div className="flex items-center space-x-3">
                    <User size={20} className="text-accent" />
                    <div>
                      <p className="text-sm text-gray-500">HMUA</p>
                      <p className="font-medium text-gray-800">{item.client}</p>
                    </div>
                  </div>
                )}
                
                {item.date && (
                  <div className="flex items-center space-x-3">
                    <Calendar size={20} className="text-accent" />
                    <div>
                      <p className="text-sm text-gray-500">Date</p>
                      <p className="font-medium text-gray-800">
                        {new Date(item.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                )}
                
                {item.category && (
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-accent"></div>
                    <div>
                      <p className="text-sm text-gray-500">Category</p>
                      <p className="font-medium text-gray-800 capitalize">{item.category}</p>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="pt-4 border-t">
                <p className="text-sm text-gray-500">
                  Interested in this look? <a href="#contact" className="text-accent hover:underline">Contact me</a> to book your appointment!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;