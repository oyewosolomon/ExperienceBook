import React, { useState } from 'react';
import { Plus, Minus, Search } from 'lucide-react';

interface FAQ {
  q: string;
  a: string;
}

interface FAQCategory {
  category: string;
  questions: FAQ[];
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const faqs: FAQCategory[] = [
    {
      category: "Booking & Scheduling",
      questions: [
        {
          q: "How do I book a service?",
          a: "Booking a service is easy! Simply search for the service you need, select a provider, choose your preferred time slot, and complete the booking process. You'll receive an immediate confirmation via email."
        },
        {
          q: "Can I reschedule or cancel my booking?",
          a: "Yes, you can reschedule or cancel your booking up to 24 hours before the scheduled service time through your dashboard. Late cancellations may incur a fee."
        }
      ]
    },
    {
      category: "Pricing & Payment",
      questions: [
        {
          q: "How does pricing work?",
          a: "Prices vary by service and provider. You'll see exact pricing before booking, including any applicable fees. We offer transparent pricing with no hidden charges."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards, debit cards, and digital wallets including PayPal. Payment is processed securely through our platform."
        }
      ]
    },
    {
      category: "Service Providers",
      questions: [
        {
          q: "How do you verify service providers?",
          a: "All providers undergo thorough background checks, license verification, and skills assessment. We also continuously monitor their performance through customer reviews."
        },
        {
          q: "What if I'm not satisfied with the service?",
          a: "We offer a 100% satisfaction guarantee. If you're not happy with the service, we'll either arrange for the provider to fix the issue or provide a full refund."
        }
      ]
    }
  ];

  const handleToggle = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Find answers to common questions about our services
          </p>
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search questions..."
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="grid gap-8">
          {filteredFaqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <h3 className="text-xl font-semibold p-6 bg-gray-50">
                {category.category}
              </h3>
              <div className="divide-y divide-gray-100">
                {category.questions.map((faq, index) => {
                  const uniqueIndex = `${categoryIndex}-${index}`;
                  const isOpen = openIndex === uniqueIndex;

                  return (
                    <div key={index} className="border-t border-gray-100">
                      <button
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => handleToggle(uniqueIndex)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-${uniqueIndex}`}
                      >
                        <span className="text-lg font-medium text-gray-900">{faq.q}</span>
                        {isOpen ? (
                          <Minus className="w-5 h-5 text-gray-500" />
                        ) : (
                          <Plus className="w-5 h-5 text-gray-500" />
                        )}
                      </button>
                      <div
                        id={`faq-${uniqueIndex}`}
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? 'max-h-96' : 'max-h-0'
                        }`}
                      >
                        <p className="px-6 pb-4 text-gray-600">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Can't find what you're looking for?
          </p>
          <button className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;