import React, { useState } from 'react';
import { ExternalLink, Image } from 'lucide-react';
import Section from '../ui/Section';
import Card, { CardContent, CardImage } from '../ui/Card';
import ImageModal from '../ui/ImageModal';
import { PORTFOLIO_ITEMS } from '../../constants/data';

const PortfolioGrid = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <Section 
        id="portfolio"
        title="Portfolio"
        subtitle="A collection of fresh, natural, and elegant looks — each one created to bring out every client’s true beauty. ✨"
        className="bg-gray-50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item) => (
            <Card key={item.id} hoverable className="cursor-pointer group">
              <div 
                className="relative overflow-hidden"
                onClick={() => setSelectedItem(item)}
              >
                <CardImage 
                  src={item.image} 
                  alt={item.title}
                  className="h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Image size={24} className="text-accent" />
                  </div>
                </div>
              </div>
              <CardContent>
                <h3 className="text-xl font-semibold mb-2 text-secondary">{item.title}</h3>
                <p className="text-gray-600 line-clamp-2 mb-4">{item.description}</p>
                <button
                  onClick={() => setSelectedItem(item)}
                  className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors text-sm font-medium"
                >
                  <ExternalLink size={16} />
                  <span>View Details</span>
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <ImageModal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        item={selectedItem}
      />
    </>
  );
};

export default PortfolioGrid;