import React, { useState } from 'react';
import { Check, X, ChevronDown } from 'lucide-react';

interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  highlight: boolean;
  features: string[];
  notIncluded: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const pricingPlans: PricingPlan[] = [
    {
      name: 'Basic',
      description: 'Perfect for occasional travelers',
      monthlyPrice: 0,
      yearlyPrice: 0,
      highlight: false,
      features: [
        'Access to all public experiences',
        'Basic booking management',
        'Email support',
        'Mobile app access',
        'Standard customer support'
      ],
      notIncluded: [
        'Priority booking',
        'Exclusive experiences',
        'Dedicated travel concierge',
        'Custom itineraries'
      ]
    },
    {
      name: 'Premium',
      description: 'For frequent travelers seeking unique experiences',
      monthlyPrice: 19.99,
      yearlyPrice: 199.99,
      highlight: true,
      features: [
        'All Basic features',
        'Priority booking access',
        'Exclusive member-only experiences',
        'Dedicated support line',
        'Offline access to guides',
        'Free cancellation on most bookings',
        'Monthly credits for experiences'
      ],
      notIncluded: [
        'Dedicated travel concierge',
        'Custom itineraries'
      ]
    },
    {
      name: 'Elite',
      description: 'Ultimate travel experience with personalized service',
      monthlyPrice: 49.99,
      yearlyPrice: 499.99,
      highlight: false,
      features: [
        'All Premium features',
        'Personal travel concierge',
        'Custom itinerary planning',
        'VIP experiences access',
        'Priority customer support',
        'Exclusive event invitations',
        'Flexible cancellation on all bookings',
        'Quarterly bonus credits'
      ],
      notIncluded: []
    }
  ];

  const faqs: FAQ[] = [
    {
      question: 'Can I switch between plans?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and Apple Pay for your convenience.'
    },
    {
      question: 'Is there a refund policy?',
      answer: "Yes, we offer a 30-day money-back guarantee on all paid plans if you're not satisfied with our service."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Perfect Plan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the plan that best fits your travel style. All plans include access to our platform's core features.
          </p>
          
          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center bg-white rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md transition-all duration-200 ${
                billingCycle === 'monthly'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-md transition-all duration-200 ${
                billingCycle === 'yearly'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Yearly
              <span className="ml-2 text-sm bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200 ${
                plan.highlight ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              {plan.highlight && (
                <div className="bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-600 ml-2">
                      /{billingCycle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  {plan.monthlyPrice > 0 && (
                    <p className="text-sm text-gray-500 mt-1">
                      {billingCycle === 'yearly' ? 'Billed annually' : 'Billed monthly'}
                    </p>
                  )}
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold mb-8 transition-colors duration-200 ${
                    plan.highlight
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </button>

                <div className="space-y-4">
                  <p className="font-semibold">Included features:</p>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="text-green-500 flex-shrink-0" size={18} />
                      <span>{feature}</span>
                    </div>
                  ))}
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <p className="font-semibold mt-6">Not included:</p>
                      {plan.notIncluded.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-gray-500">
                          <X className="flex-shrink-0" size={18} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <ChevronDown
                    className={`transform transition-transform duration-200 ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                    size={20}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Support Banner */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">
              Need help choosing the right plan?
            </h3>
            <p className="text-gray-600 mb-6">
              Our team is here to help you find the perfect plan for your travel needs.
            </p>
            <button className="bg-white px-6 py-3 rounded-lg font-semibold text-blue-600 hover:bg-gray-50 transition-colors duration-200">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;