import { ArrowRight, Check } from "lucide-react";

interface Program {
  link: string;
  title: string;
  description: string;
  price: string;
  extraPrice?: string;
  features: string[];
  popular: boolean;
  color: string;
  image: string;
}

const ProgramCards = () => {
  const programs: Program[] = [
    {
      link: "https://pages.razorpay.com/pl_QhRB8FR9rS1dmi/view",
      title: "HSTES",
      description:
        "Complete guidance through the entire college application process",
      price: "₹1299/-",
      extraPrice: "₹1599/-",

      features: [
        "Direct Call & 1-on-1 Support Sessions",
        "Customised Choice Filling Just for You",
        "Full Support for Certificates & Scholarships",
        "Best College Recommendation According to Your Rank",
        "Exclusive Student Support Group on WhatsApp",
        "College Insider Tips Just for You",
      ],
      popular: false,
      color: "bg-primary-500",
      image: "/res/imgs/programs/hstes.png",
    },
    {
      link: "https://pages.razorpay.com/pl_QiFpO5Pa41R6vf/view",
      title: "JoSaa",
      description:
        "Expert guidance to craft compelling personal statements and essays",
      price: "₹999/-",
      extraPrice: "₹1299/-",
      features: [
        "Personalized Choice Filling Support",
        "One-on-One Counselling Call/Session",
        "Complete College Prediction",
        "Document & Certificate Guidance",
        "Backup College Strategy",
        "Personal WhatsApp Group",
        "Detailed Round-by-Round Strategy",
      ],
      popular: false,
      color: "bg-secondary-500",
      image: "/res/imgs/programs/josaa.png",
    },
    {
      link: "https://pages.razorpay.com/pl_QiFzBfZkv3pMYK/view",
      title: "JAC Delhi",
      description:
        "Comprehensive preparation for college and scholarship interviews",
      price: "₹899/-",
      extraPrice: "₹1199/-",
      features: [
        "End-to-End Counselling Assistance",
        "1-on-1 Call/Chat Support",
        "Spot Round Special Guidance",
        "Instant WhatsApp Support Group",
        "Scholarship & Document Assistance",
        "College Prediction Support",
      ],
      popular: false,
      color: "bg-accent-500",
      image: "/res/imgs/programs/jac-delhi.png",
    },
  ];

  return (
    <section className="py-20 bg-white" id="programs">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Choose the Perfect Program for You
          </h2>
          <p className="text-lg text-gray-700">
            We offer specialized packages designed to meet your specific needs
            in the college application process. Each program is tailored to help
            you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div
              key={program.link}
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

              <div className="h-48  overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6 flex-grow flex flex-col">
                <div
                  className={`w-12 h-1 ${program.color} mb-4 rounded-full`}
                ></div>
                <h3 className={`text-xl font-bold mb-2 ${program.color}`}>
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-4">{program.description}</p>

                <div className="mb-6 flex-grow">
                  <ul className="space-y-2">
                    {program.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check
                          size={18}
                          className="text-success-500 mr-2 mt-1 flex-shrink-0"
                        />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <div className="flex items-end justify-between mb-4">
                    <div className="gap-2 flex items-baseline">
                      <span className="text-2xl font-bold">
                        {program.price}
                      </span>
                      <span
                        className="text-2xl font-bold"
                        style={{
                          textDecoration: "line-through",
                          color: "#9CA3AF",
                        }}
                      >
                        {program.extraPrice}
                      </span>
                    </div>
                  </div>

                  <a
                    href={program.link}
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium text-white ${program.color} hover:opacity-90 transition-opacity`}
                  >
                    View Details
                    <ArrowRight size={18} />
                  </a>
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
