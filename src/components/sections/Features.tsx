import React from 'react';
import { Star, Clock, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const Features = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const experiences = [
    {
      title: "Mountain Hiking Adventure",
      location: "Swiss Alps",
      rating: 4.9,
      reviews: 128,
      duration: "8 hours",
      groupSize: "Up to 8",
      price: 149,
      image: "/images/h.jpg"
    },
    {
      title: "Cooking Class in Rome",
      location: "Rome, Italy",
      rating: 4.8,
      reviews: 256,
      duration: "3 hours",
      groupSize: "Up to 6",
      price: 89,
      image: "/images/cooking.jpg"
    },
    {
      title: "Scuba Diving Experience",
      location: "Great Barrier Reef",
      rating: 4.9,
      reviews: 184,
      duration: "5 hours",
      groupSize: "Up to 4",
      price: 199,
      image: "/images/diving.jpg"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Experiences</h2>
            <p className="text-gray-600">Handpicked activities loved by travelers</p>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => setCurrentSlide(Math.min(experiences.length - 1, currentSlide + 1))}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200"
            >
              <div className="relative">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
                  ${experience.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                <p className="text-gray-600 mb-4">{experience.location}</p>
                
                <div className="flex items-center gap-2 mb-4">
                  <Star className="text-yellow-400 fill-current" size={20} />
                  <span className="font-semibold">{experience.rating}</span>
                  <span className="text-gray-500">({experience.reviews} reviews)</span>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{experience.groupSize}</span>
                  </div>
                </div>

                <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;