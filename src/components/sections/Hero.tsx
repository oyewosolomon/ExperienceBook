import React from 'react';
import { ChevronRight, Search, MapPin, Calendar, Users } from 'lucide-react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [location, setLocation] = React.useState('');

  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black/40">
        <img
          src="/images/d.jpg"
          alt="Travel Experience"
          className="w-full h-full object-cover opacity-6"
        />
      </div>

      {/* Content */}
      <div className="relative pt-32 pb-16 px-4 max-w-7xl mx-auto">
        {/* Stats Banner */}
        <div className="flex gap-8 mb-8 justify-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-3">
            <p className="text-2xl font-bold text-blue-600">50,000+</p>
            <p className="text-gray-600">Local Experiences</p>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-6 py-3">
            <p className="text-2xl font-bold text-blue-600">100,000+</p>
            <p className="text-gray-600">Monthly Bookings</p>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Discover Unforgettable
            <span className="block text-blue-400">Local Experiences</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Connect with expert local guides and book amazing activities instantly.
            Your next adventure is just a click away.
          </p>
        </div>

        {/* Search Box */}
        <div className="bg-white rounded-xl shadow-2xl p-4 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-12 gap-4">
            <div className="md:col-span-5 relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search experiences..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="md:col-span-4 relative">
              <MapPin className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Location"
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <button className="md:col-span-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-2 flex items-center justify-center gap-2 transition-colors duration-200">
              Explore Now
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
              <Calendar size={16} />
              <span>Today</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
              <Users size={16} />
              <span>Group Activities</span>
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
              <MapPin size={16} />
              <span>Near Me</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;