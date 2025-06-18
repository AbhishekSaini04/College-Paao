const imgs = [
  "/res/imgs/comments/c1.jpg",
  // "/res/imgs/comments/c2.jpg",
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

const Testimonials = () => {
  const doubleImgs = [...imgs, ...imgs]; // for looping effect

  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl text-primary-500 md:text-4xl font-bold mb-4">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-700">
            Hear from students who've achieved their college dreams with our guidance.
          </p>
        </div>

        {/* Animation styles */}
        <style>{`
          @keyframes scrollUp {
            0% { transform: translateY(0%); }
            100% { transform: translateY(-50%); }
          }

          @keyframes scrollDown {
            0% { transform: translateY(-50%); }
            100% { transform: translateY(0%); }
          }

          .scroll-column {
            height: 400px;
            overflow: hidden;
          }

          .scroll-up {
            animation: scrollUp 25s linear infinite;
          }

          .scroll-down {
            animation: scrollDown 25s linear infinite;
          }
        `}</style>

        {/* Mobile view (1 column, scroll up) */}
        <div className="block md:hidden scroll-column">
          <div className="scroll-up flex flex-col items-center">
            {doubleImgs.map((img, index) => (
              <div key={index} className="w-[300px] bg-white rounded-xl shadow-md p-4 mb-6">
                <img src={img} alt={`Testimonial ${index}`} className="w-full rounded-lg" />
              </div>
            ))}
          </div>
        </div>

        {/* Tablet/Laptop view (3 columns, 2 down, 1 up) */}
        <div className="hidden md:flex justify-center gap-6">
          {/* Column 1: scroll down */}
          <div className="scroll-column w-[300px]">
            <div className="scroll-down flex flex-col items-center">
              {doubleImgs.map((img, index) => (
                <div key={`down1-${index}`} className="w-full bg-white rounded-xl shadow-md p-4 mb-6">
                  <img src={img} alt={`Testimonial ${index}`} className="w-full rounded-lg" />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: scroll up */}
          <div className="scroll-column w-[300px]">
            <div className="scroll-up flex flex-col items-center">
              {doubleImgs.map((img, index) => (
                <div key={`up-${index}`} className="w-full bg-white rounded-xl shadow-md p-4 mb-6">
                  <img src={img} alt={`Testimonial ${index}`} className="w-full rounded-lg" />
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: scroll down */}
          <div className="scroll-column w-[300px]">
            <div className="scroll-down flex flex-col items-center">
              {doubleImgs.map((img, index) => (
                <div key={`down2-${index}`} className="w-full bg-white rounded-xl shadow-md p-4 mb-6">
                  <img src={img} alt={`Testimonial ${index}`} className="w-full rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
