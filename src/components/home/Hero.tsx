import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Path to{" "}
              <span className="text-primary-500">College Success</span> Starts
              Here
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0">
              Expert counseling to help you navigate college admissions, write
              standout essays, and prepare for interviews. Join thousands of
              successful students who found their perfect college match.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link
                to="/signup"
                className="btn-primary flex items-center justify-center gap-2 text-base"
              >
                Get Started
                <ArrowRight size={18} />
              </Link>
              <Link
                onClick={() => {
                  document
                    .getElementById(`programs`)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                to=""
                className="btn-secondary flex items-center justify-center gap-2 text-base"
              >
                Explore Programs
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-success-500" />
                <span>98% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-success-500" />
                <span>Personalized Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-success-500" />
                <span>Expert Counselors</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/res/imgs/mainBanner.png"
                alt="Student getting college counseling"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Stats overlay */}
            <div
              style={{ padding: "10px" }}
              className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-white rounded-lg shadow-lg p-4 md:p-6"
            >
              <div className="text-center">
                <p className="text-gray-600 text-sm font-medium">
                  Students Guided
                </p>
                {/* student count 0 to 100 */}
                <p className="text-3xl md:text-4xl font-bold text-primary-500">
                  <CountUp end={100} duration={2.5} suffix={"+"} />
                </p>
              </div>
            </div>

            {/* Success rate overlay */}
            {/* <div className="absolute -top-6 -right-6 md:-top-8 md:-right-8 bg-white rounded-lg shadow-lg p-4 md:p-6">
              <div className="text-center">
                <p className="text-gray-600 text-sm font-medium">
                  College Acceptance
                </p>
                <p className="text-3xl md:text-4xl font-bold text-success-500">
                  98%
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
