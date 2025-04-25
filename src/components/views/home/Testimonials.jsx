import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Plant Enthusiast',
      content: 'The plants I received were healthy and beautifully packaged. My snake plant has thrived since I got it!',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Interior Designer',
      content: 'Great variety of plants perfect for home staging. My clients always love the greenery I add to their spaces.',
      rating: 4
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Office Manager',
      content: 'We order plants regularly for our office. They always arrive in perfect condition and brighten up our workspace.',
      rating: 5
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-green-50 to-white"> {/* Reduced padding */}
      <div className="container mx-auto px-6"> {/* Reduced padding */}
        <div className="text-center mb-12"> {/* Reduced bottom margin */}
          <span className="inline-block px-4 py-1 text-sm font-semibold text-green-600 bg-green-100 rounded-full mb-4">
            Happy Customers
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">What Our Customers Say</h2> {/* Reduced font size */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from plant lovers who've transformed their spaces with our greenery
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> {/* Adjusted grid layout */}
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex mb-4"> {/* Reduced margin */}
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-lg text-gray-600 mb-6 relative">
                <span className="absolute -top-4 -left-2 text-4xl text-green-100 opacity-70">"</span> {/* Reduced size of quotes */}
                <p className="relative z-10">{testimonial.content}</p>
                <span className="absolute -bottom-6 -right-2 text-4xl text-green-100 opacity-70">"</span> {/* Reduced size of quotes */}
              </blockquote>
              
              <div>
                <p className="font-semibold text-gray-800 text-lg">{testimonial.name}</p> {/* Reduced font size */}
                <p className="text-sm text-gray-500 mt-1">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10"> {/* Reduced top margin */}
          <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
            Read More Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
