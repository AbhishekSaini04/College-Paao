import React from 'react';
import { Users, School, Award, ThumbsUp } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const stats = [
    {
      icon: <Users size={32} className="text-primary-500" />,
      value: 100,
      label: 'Students Counseled',
      description: 'Successfully guided thousands of students through college admissions',
      suffix: '+'
    },
    {
      icon: <School size={32} className="text-secondary-500" />,
      value: 3500,
      label: 'Total Colleges',
      description: 'Total number of colleges in india including NITs and IITs',
      suffix: '+'
    },
    {
      icon: <Award size={32} className="text-accent-500" />,
      value: 98,
      label: 'Success Rate',
      description: 'Almost all of our students get into their desired colleges',
      suffix: '%'
    },
    {
      icon: <ThumbsUp size={32} className="text-success-500" />,
      value: 25,
      label: 'Months Experience',
      description: 'It has been 25 months since we started our journey',
      suffix: '+'
    }
  ];

  return (
    <section className="py-16 bg-dark-900 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Trusted by Thousands of Students
          </h2>
          <p className="text-lg text-gray-700">
            Our proven track record speaks for itself. We've helped students from all
            backgrounds achieve their college dreams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-dark-800 rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-500 hover:scale-105 border border-dark-700"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
            
              <div className="text-3xl md:text-4xl font-bold mb-2 text-white">
                {inView ? (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                    
                  />
                ) : (
                  '0'
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-100 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;