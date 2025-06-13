import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: "When should I start the college counseling process?",
      answer: "Ideally, students should begin the college counseling process during their junior year of high school. This allows enough time to research colleges, prepare for standardized tests, develop extracurricular profiles, and work on applications without feeling rushed. However, we can assist students at any stage of the process."
    },
    {
      question: "How do your counseling services differ from school guidance counselors?",
      answer: "While school guidance counselors are valuable resources, they often have large caseloads of students and limited time. Our counselors work with a select number of students, providing personalized attention, in-depth knowledge of specific colleges, and specialized expertise in crafting compelling applications. We complement the work of school counselors by offering more intensive, individualized support."
    },
    {
      question: "What is your success rate for getting students into their top-choice schools?",
      answer: "Our students have a 98% acceptance rate to one of their top three choice schools. While we can't guarantee admission to any specific college, our comprehensive approach to the application process significantly improves students' chances of acceptance. We help students create realistic college lists that include reach, target, and likely schools."
    },
    {
      question: "Do you help with financial aid and scholarship applications?",
      answer: "Yes, our comprehensive package includes guidance on financial aid and scholarship applications. We help students identify scholarship opportunities, review financial aid forms, and develop strategies to maximize financial support. We can also assist with scholarship essays and applications."
    },
    {
      question: "How often will we meet with our counselor?",
      answer: "Meeting frequency depends on the package you choose and your individual needs. Typically, students in our comprehensive program meet with their counselor biweekly during junior year and weekly during application season. We're also available for questions via email between scheduled meetings."
    },
    {
      question: "Can you help with specific programs like engineering, arts, or athletics?",
      answer: "Absolutely! We have counselors with expertise in various specialized areas, including engineering, visual and performing arts, athletics, and more. We'll match you with a counselor who has experience with your areas of interest and can provide targeted guidance for specialized programs."
    }
  ];

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700">
            Get answers to the most common questions about our college counseling services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="border-b border-gray-200 last:border-0"
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex justify-between items-center w-full py-6 text-left font-medium text-gray-900 hover:text-primary-500 transition-colors focus:outline-none"
              >
                <span className="text-lg">{item.question}</span>
                <span className="ml-4">
                  {openIndex === index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-700 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;