import React from 'react';

const TopCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Indoor Plants',
      description: 'Perfect for your living space',
      image: '/images/Categories/indoor.jpg',
      icon: '🌿'
    },
    {
      id: 2,
      name: 'Outdoor Plants',
      description: 'Enhance your garden',
      image: '/images/Categories/outdoor.jpg',
      icon: '🌳'
    },
    {
      id: 3,
      name: 'Flowering Plants',
      description: 'Add color to your life',
      image: '/images/Categories/flower.jpg',
      icon: '🌸'
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-green-50"> {/* Reduced padding */}
      <div className="container mx-auto px-6"> {/* Reduced horizontal padding */}
        <div className="text-center mb-8"> {/* Reduced bottom margin */}
          <span className="inline-block px-3 py-1 text-sm font-semibold text-green-600 bg-green-100 rounded-full mb-4">
            Our Collections
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Top Plant Categories</h2> {/* Reduced font size */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover nature's beauty with our premium plant selections
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> {/* Adjusted grid columns */}
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden"> {/* Reduced image height */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute top-4 right-4 text-3xl">{category.icon}</span> {/* Reduced icon size */}
              </div>
              <div className="p-5"> {/* Reduced padding */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h3> {/* Reduced font size */}
                <p className="text-gray-600 mb-5">{category.description}</p> {/* Reduced margin */}
                <button className="flex items-center text-green-600 font-semibold hover:text-green-800 transition-colors">
                  Explore Collection
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8"> {/* Reduced top margin */}
          <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
