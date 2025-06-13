// import React from 'react';
// import { Star } from 'lucide-react';

// interface Testimonial {
//   id: number;
//   name: string;
//   college: string;
//   image: string;
//   text: string;
//   rating: number;
// }

const Testimonials = () => {
  // const testimonials: Testimonial[] = [
  //   {
  //     id: 1,
  //     name: "Sophia Chen",
  //     college: "Stanford University",
  //     image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     text: "EduGuide completely transformed my application process. Their counselors helped me craft essays that truly showcased my personality and achievements. I couldn't have gotten into Stanford without them!",
  //     rating: 5
  //   },
  //   {
  //     id: 2,
  //     name: "James Wilson",
  //     college: "MIT",
  //     image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     text: "The interview preparation was invaluable. I felt so confident walking into my MIT interview because of the mock sessions. My counselor knew exactly what questions would be asked!",
  //     rating: 5
  //   },
  //   {
  //     id: 3,
  //     name: "Ava Rodriguez",
  //     college: "Yale University",
  //     image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     text: "As a first-generation college student, I had no idea where to start. EduGuide walked me through every step of the process and helped me get into my dream school with a scholarship!",
  //     rating: 5
  //   },
  //   {
  //     id: 4,
  //     name: "Michael Kim",
  //     college: "Harvard University",
  //     image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     text: "The comprehensive package was worth every penny. From college selection to financial aid appeals, my counselor was there for me at every step. Now I'm heading to Harvard!",
  //     rating: 5
  //   },
  //   {
  //     id: 5,
  //     name: "Emma Thompson",
  //     college: "Columbia University",
  //     image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     text: "I was struggling with my personal statement until I worked with EduGuide. My counselor helped me find my voice and tell my story in a compelling way. The results speak for themselves!",
  //     rating: 5
  //   },
  //   {
  //     id: 6,
  //     name: "David Patel",
  //     college: "Duke University",
  //     image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     text: "The essay package was exactly what I needed. My counselor pushed me to dig deeper and write something truly authentic. I'm convinced it's what set my application apart.",
  //     rating: 5
  //   }
  // ];

  // Duplicate testimonials to create an infinite scroll effect
  // const scrollTestimonials = [...testimonials, ...testimonials];
  const imgs = [
    "/res/imgs/comments/c1.jpg",
    "/res/imgs/comments/c2.jpg",
    "/res/imgs/comments/c3.jpg",
    "/res/imgs/comments/c4.jpg",
    "/res/imgs/comments/c5.jpg",
    "/res/imgs/comments/c6.jpg",
    "/res/imgs/comments/c7.jpg",
    "/res/imgs/comments/c8.jpg",
    "/res/imgs/comments/c9.jpg",
    "/res/imgs/comments/c10.jpg",
    "/res/imgs/comments/c11.jpg",
    "/res/imgs/comments/c12.jpg",
  ];

  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl  text-primary-500 md:text-4xl font-bold mb-6">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-700">
            Hear from students who've achieved their college dreams with our
            guidance. These success stories could be yours too.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-infinite-scroll ">
            {imgs.map((img, index) => (
              <div
                key={index}
                className="min-w-[350px] max-w-[350px] mx-4 bg-white rounded-xl shadow-md p-6 flex flex-col"
              >
                <img
                  src={img}
                  alt={`Testimonial ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg mb-4"
                />
              </div>
            ))}
            {/* {scrollTestimonials.map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${index}`}
                className="min-w-[350px] max-w-[350px] mx-4 bg-white rounded-xl shadow-md p-6 flex flex-col"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-primary-100"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-primary-500">{testimonial.college}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                
                <p className="text-gray-700 italic flex-grow">"{testimonial.text}"</p>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
