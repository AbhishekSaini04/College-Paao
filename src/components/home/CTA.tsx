import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 bg-primary-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your College Journey?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who found their perfect college match. 
            Our expert counselors are ready to guide you through every step of the process.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup" 
              className="bg-white text-primary-500 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>
            <Link 
              to="/login" 
              className="bg-transparent text-white border border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;