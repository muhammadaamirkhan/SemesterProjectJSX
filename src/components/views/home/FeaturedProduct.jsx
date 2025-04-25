import React from 'react';

const FeaturedPlants = () => {
  const featuredPlants = [
    {
      id: 1,
      name: 'Snake Plant',
      price: 29.99,
      image: '/images/Featured/snakeplant.jpg',
      category: 'Indoor'
    },
    {
      id: 2,
      name: 'Peace Lily',
      price: 24.99,
      image: '/images/Featured/peacelily.jpg',
      category: 'Indoor'
    },
    {
      id: 3,
      name: 'Aloe Vera',
      price: 19.99,
      image: '/images/Featured/aloevera.jpg',
      category: 'Succulent'
    },
    {
      id: 4,
      name: 'Fiddle Leaf Fig',
      price: 39.99,
      image: '/images/Featured/fiddleleafe.jpg',
      category: 'Indoor'
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12 underline decoration-yellow-400 underline-offset-8">
          Featured Plants
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredPlants.map((plant) => (
            <div
              key={plant.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 overflow-hidden"
            >
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{plant.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{plant.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-700 text-lg font-bold">
                    ${plant.price.toFixed(2)}
                  </span>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 text-sm rounded-full shadow-md transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPlants;
