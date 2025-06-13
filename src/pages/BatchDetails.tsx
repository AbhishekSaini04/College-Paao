import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, X } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

interface ProgramFeature {
  feature: string;
  included: boolean;
}

interface Program {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  price: string;
  image: string;
  color: string;
  features: ProgramFeature[];
  benefits: string[];
}

const BatchDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  const programs: Program[] = [
    {
      id: 1,
      title: "Comprehensive Package",
      description: "Complete guidance through the entire college application process",
      longDescription: "Our Comprehensive Package provides end-to-end support throughout the entire college application process. From creating a balanced college list to completing applications and preparing for interviews, our expert counselors will be with you every step of the way. This package is ideal for students who want comprehensive guidance and support.",
      price: "$1,999",
      image: "https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      color: "bg-primary-500",
      features: [
        { feature: "Personalized college selection", included: true },
        { feature: "Application strategy", included: true },
        { feature: "Essay writing guidance", included: true },
        { feature: "Interview preparation", included: true },
        { feature: "Scholarship application help", included: true },
        { feature: "24/7 support during application season", included: true },
        { feature: "15 hours of one-on-one counseling", included: true },
        { feature: "Resume building", included: true },
        { feature: "Extracurricular planning", included: true },
        { feature: "Financial aid advising", included: true },
        { feature: "Unlimited email support", included: true },
        { feature: "Decision strategy", included: true }
      ],
      benefits: [
        "Tailored guidance from experienced counselors",
        "Comprehensive support throughout the entire application process",
        "Higher acceptance rates to top-choice schools",
        "Reduced stress for students and families",
        "Strategic approach to college selection and applications",
        "Expert advice on financial aid and scholarships"
      ]
    },
    {
      id: 2,
      title: "Essay Specialist Package",
      description: "Expert guidance to craft compelling personal statements and essays",
      longDescription: "The Essay Specialist Package focuses on helping students craft compelling personal statements and supplemental essays that will make their applications stand out. Our experienced essay specialists will guide students through the entire writing process, from brainstorming topics to polishing final drafts.",
      price: "$899",
      image: "https://images.pexels.com/photos/4144294/pexels-photo-4144294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      color: "bg-secondary-500",
      features: [
        { feature: "Personalized college selection", included: false },
        { feature: "Application strategy", included: true },
        { feature: "Essay writing guidance", included: true },
        { feature: "Interview preparation", included: false },
        { feature: "Scholarship application help", included: false },
        { feature: "24/7 support during application season", included: false },
        { feature: "5 hours of one-on-one counseling", included: true },
        { feature: "Resume building", included: false },
        { feature: "Extracurricular planning", included: false },
        { feature: "Financial aid advising", included: false },
        { feature: "Email support", included: true },
        { feature: "Decision strategy", included: false }
      ],
      benefits: [
        "Guidance from expert essay specialists",
        "Personalized feedback on essays",
        "Development of unique and compelling personal narratives",
        "Multiple revision rounds to perfect essays",
        "Strategies for addressing challenging prompts",
        "Tips for making essays stand out to admissions committees"
      ]
    },
    {
      id: 3,
      title: "Interview Preparation",
      description: "Comprehensive preparation for college and scholarship interviews",
      longDescription: "Our Interview Preparation package is designed to help students feel confident and prepared for college and scholarship interviews. Through mock interviews, personalized feedback, and targeted coaching, students will develop the skills they need to make a positive impression and effectively communicate their strengths and goals.",
      price: "$599",
      image: "https://images.pexels.com/photos/5699429/pexels-photo-5699429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      color: "bg-accent-500",
      features: [
        { feature: "Personalized college selection", included: false },
        { feature: "Application strategy", included: false },
        { feature: "Essay writing guidance", included: false },
        { feature: "Interview preparation", included: true },
        { feature: "Scholarship application help", included: false },
        { feature: "24/7 support during application season", included: false },
        { feature: "3 hours of one-on-one counseling", included: true },
        { feature: "Resume building", included: false },
        { feature: "Extracurricular planning", included: false },
        { feature: "Financial aid advising", included: false },
        { feature: "Email support", included: true },
        { feature: "Decision strategy", included: false }
      ],
      benefits: [
        "Personalized interview coaching",
        "Mock interviews with detailed feedback",
        "Reduced interview anxiety",
        "Strategies for answering difficult questions",
        "Body language and presentation coaching",
        "Post-interview follow-up guidance"
      ]
    }
  ];
  
  const program = programs.find(p => p.id === Number(id));
  
  if (!program) {
    return (
      <div className="min-h-screen bg-dark-950 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4 text-white">Program not found</h1>
        <Link to="/" className="text-primary-500 hover:text-primary-400 hover:underline">
          Return to home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-dark-950">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <Link 
            to="/#programs" 
            className="inline-flex items-center text-primary-500 hover:text-primary-400 mb-8"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Programs
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className={`w-20 h-2 ${program.color} rounded-full mb-6`}></div>
              <h1 className="text-4xl font-bold mb-4 text-white">{program.title}</h1>
              <p className="text-xl text-gray-300 mb-6">{program.description}</p>
              
              <div className="mb-8">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-auto rounded-xl shadow-md"
                />
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-white">About This Program</h2>
                <p className="text-gray-300 mb-6">{program.longDescription}</p>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-white">Key Benefits</h2>
                <ul className="space-y-3">
                  {program.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={20} className="text-success-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-dark-800 rounded-xl shadow-lg p-8 sticky top-28 border border-dark-700">
                <div className="mb-6">
                  <span className="text-sm text-gray-400">Price</span>
                  <div className="flex items-end">
                    <span className="text-4xl font-bold text-white">{program.price}</span>
                    <span className="text-gray-400 ml-2">one-time payment</span>
                  </div>
                </div>
                
                <button 
                  className={`w-full py-3 px-4 rounded-lg font-medium text-white ${program.color} hover:opacity-90 transition-all duration-300 hover:scale-105 mb-8`}
                >
                  Enroll Now
                </button>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">What's Included</h3>
                  <ul className="space-y-3">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-center justify-between">
                        <span className="text-gray-300">{feature.feature}</span>
                        {feature.included ? (
                          <Check size={18} className="text-success-500" />
                        ) : (
                          <X size={18} className="text-gray-500" />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BatchDetails;