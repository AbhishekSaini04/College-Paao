import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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
      question: "Can I get a refund if I made a wrong payment?",
      answer:
        "Once a transaction is successfully completed and the amount is debited from your account, the payment will not be refunded unless there is a genuine transactional error (like double deduction or technical failure). In case of such issues, please contact our support team with proper proof and transaction details.",
    },
    {
      question:
        "What should I do if the amount is deducted but the payment status shows 'Failed'?",
      answer:
        "If the payment has been deducted from your account but shows 'Failed' on the portal, the amount is usually auto-refunded by the payment gateway within 5-7 working days. If the refund is not reflected within this period, please contact our support team with your transaction ID for quick resolution",
    },
    {
      question: "Can I pay fees using UPI/Net Banking/Credit/Debit Card?",
      answer:
        "Yes, we support multiple payment modes including UPI, Net Banking, Credit Card, Debit Card, and Wallets. Choose your preferred payment method at the checkout/payment page.",
    },
    {
      question: "Can I get an invoice or receipt after payment?",
      answer:
        "Yes, a detailed payment receipt will be automatically generated and made available on your account dashboard. It will also be sent to your registered email ID.",
    },
    {
      question: "Is the online payment system safe?",
      answer:
        "Yes, the College Paao portal uses secure and encrypted payment gateways to ensure safe transactions. We do not store your payment information like card or UPI details",
    },
  ];

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700">
            Get answers to the most common questions about our college
            counseling services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200 last:border-0">
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
                  openIndex === index
                    ? "max-h-96 opacity-100 pb-6"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
