import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

interface Program {
  id: number;
  title: string;
  description: string;
  price: string;
  features: string[];
  popular: boolean;
  color: string;
  image: string;
}

const ProgramCards = () => {
  const programs: Program[] = [
    {
      id: 1,
      title: "HSTES",
      description: "Complete guidance through the entire college application process",
      price: "$1,999",
      features: [
        "Personalized college selection",
        "Application strategy",
        "Essay writing guidance",
        "Interview preparation",
        "Scholarship application help",
        "24/7 support during application season"
      ],
      popular: true,
      color: "bg-primary-500",
      image: "https://lkouniexam.in/wp-content/uploads/2024/07/Haryana-HSTES-B.tech-1st-Counselling-Seat-Allotment-2024.jpg"
      
    },
    {
      id: 2,
      title: "JoSaa",
      description: "Expert guidance to craft compelling personal statements and essays",
      price: "$899",
      features: [
        "Personal statement development",
        "Supplemental essay guidance",
        "Editing and proofreading",
        "Narrative strategy",
        "Multiple revision rounds",
        "Example essays from successful applicants"
      ],
      popular: false,
      color: "bg-secondary-500",
      image: "https://bodmaseducation.com/uploads/1746433202_JAC%20Delhi%20Counselling%202025%20%20%20%20Schedule,%20%20Registration,%20%20Eligibility.png"
    },
    {
      id: 3,
      title: "JAC Delhi",
      description: "Comprehensive preparation for college and scholarship interviews",
      price: "$599",
      features: [
        "Mock interview sessions",
        "Personalized feedback",
        "Common question preparation",
        "Body language coaching",
        "Stress management techniques",
        "Follow-up strategy"
      ],
      popular: false,
      color: "bg-accent-500",
      image: "https://www.iquanta.in/blog/wp-content/uploads/2025/02/WhatsApp-Image-2025-05-21-at-5.31.07-PM.jpeg"
      
    }
  ];

  return (
    <section className="py-20 bg-white" id="programs">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Choose the Perfect Program for You
          </h2>
          <p className="text-lg text-gray-700">
            We offer specialized packages designed to meet your specific needs in the college 
            application process. Each program is tailored to help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div 
              key={program.id}
              className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl 
                transition-all duration-300 hover:-translate-y-2 h-full flex flex-col"
            >
              {program.popular && (
                <div className="absolute top-5 right-5 z-10">
                  <span className="bg-accent-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <div className={`w-12 h-1 ${program.color} mb-4 rounded-full`}></div>
                <h3 className={`text-xl font-bold mb-2 ${program.color}`}>{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                
                <div className="mb-6 flex-grow">
                  <ul className="space-y-2">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check size={18} className="text-success-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold">{program.price}</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/batch/${program.id}`}
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium text-white ${program.color} hover:opacity-90 transition-opacity`}
                  >
                    View Details
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramCards;