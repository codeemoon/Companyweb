import { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

const faqData = [
  {
    category: "General",
    questions: [
      { q: "What services does Pillow provide?", a: "Pillow specializes in Mobile App Development (Android & iOS), Custom Web Development, AI Solutions, Backend Infrastructure, and UI/UX Design." },
      { q: "Where is Pillow located?", a: "We are based in Bhilai and Durg (Chhattisgarh) and also operation in Prayagraj and Jhunsi (Uttar Pradesh), serving clients globally." },
      { q: "Do you work with startups?", a: "Yes, we love working with startups! We provide scalable solutions that grow with your business, from MVP to full-scale enterprise products." },
      { q: "How do I start a project with you?", a: "Simply contact us via our 'Start a Project' page, email us, or send a WhatsApp message. We'll schedule a free consultation to discuss your specific needs." },
      { q: "Do you sign an NDA?", a: "Absolutely. We respect your intellectual property and are happy to sign a Non-Disclosure Agreement (NDA) before discussing your confidential ideas." },
      { q: "Who owns the code after the project is complete?", a: "You do. Once the project is fully paid for, you have 100% ownership of the source code and intellectual property." },
      { q: "What makes Pillow different from other agencies?", a: "We focus on 'Result-Oriented Innovation'. We don't just build software; we build business solutions with a focus on high-quality code, premium design, and scalable architecture." },
      { q: "Do you outsource your work?", a: "We have a dedicated in-house team of experts. For niche requirements, we may collaborate with trusted partners, but we maintain full control over quality and delivery." }
    ]
  },
  {
    category: "Mobile App Development",
    questions: [
      { q: "Do you build apps for both iOS and Android?", a: "Yes, we develop native apps for both iOS (Swift) and Android (Kotlin), as well as cross-platform apps using specialized frameworks like Flutter and React Native." },
      { q: "How long does it take to build a mobile app?", a: "A simple app can take 2-3 months, while a complex app with custom features may take 4-9 months. We provide a detailed timeline after analyzing your requirements." },
      { q: "Can you help me upload my app to the App Store and Play Store?", a: "Yes, we handle the entire submission process, ensuring your app meets all guidelines for the Apple App Store and Google Play Store." },
      { q: "Will my app work on tablets and iPads?", a: "Yes, we design all our apps to be responsive and fully functional on various screen sizes, including tablets and iPads." },
      { q: "Do you provide app maintenance after launch?", a: "Yes, we offer ongoing maintenance packages to ensure your app stays updated with the latest OS versions and security patches." },
      { q: "Can you update my existing mobile app?", a: "Yes, we can analyze the existing code of your app and help extensive with feature updates, UI redesigns, or performance improvements." }
    ]
  },
  {
    category: "Web Development",
    questions: [
      { q: "How much does a website cost?", a: "Our static websites start from ₹1000 - ₹5000. Dynamic, feature-rich websites generally range from ₹8000 - ₹10000+. Custom enterprise solutions are quoted based on requirements." },
      { q: "Will my website be mobile-friendly?", a: "Yes, every website we build is 100% responsive, ensuring it looks and works perfectly on smartphones, tablets, and desktops." },
      { q: "Which platform do you use for website development?", a: "We use modern technologies like React, Next.js, and Node.js for custom sites. We can also work with CMS platforms if specifically requested." },
      { q: "Can I update the website content myself?", a: "Yes, for dynamic websites, we can provide an admin panel that allows you to easily update text, images, and other content without coding knowledge." },
      { q: "Do you provide website hosting?", a: "We can help you set up hosting with top providers like AWS, Vercel, or Hostinger, but you typically pay the hosting provider directly." },
      { q: "Is SEO included in the website build?", a: "We build all websites with SEO best practices (semantic HTML, fast loading, meta tags). Advanced SEO campaigns are a separate service." }
    ]
  },
  {
    category: "Pricing & Payment",
    questions: [
      { q: "What is your pricing model?", a: "We offer both Fixed Price (for well-defined projects) and Hourly/Monthly models (for ongoing development and team augmentation)." },
      { q: "Do you take an advance payment?", a: "Yes, typically we require a mobilization advance to schedule resources, with remaining payments tied to project milestones." },
      { q: "Are there any hidden costs?", a: "No. We provide a transparent quote. The only third-party costs (like hosting, domain, paid APIs, Play Store fees) will be clearly identified." },
      { q: "Can I pay in installments?", a: "Yes, most of our projects use a milestone-based payment structure, so you pay as we deliver specific parts of the project." }
    ]
  },
  {
    category: "Support & Maintenance",
    questions: [
      { q: "What happens if I find a bug after delivery?", a: "We provide a free support period (typically 30 days) after launch to fix any bugs found in our code." },
      { q: "Do you offer long-term support?", a: "Yes, we offer Annual Maintenance Contracts (AMC) to keep your software secure, fast, and up-to-date." },
      { q: "Can you add new features later?", a: "Absolutely. We build our software to be modular and scalable, so adding new features in the future is straightforward." },
      { q: "How do we communicate during the project?", a: "We use WhatsApp, Email, Slack, or Trello—whatever you prefer. We provide regular weekly updates on progress." }
    ]
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("General");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = faqData.map(c => c.category);
  const activeQuestions = faqData.find(c => c.category === activeCategory)?.questions || [];

  return (
    <section className="py-20 px-6 md:px-12 bg-[#fcfdff] w-full">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <ScrollReveal>
            <h2 className="text-4xl md:text-6xl text-[#292929] leading-tight font-normal">
              Frequently Asked <br/> <span className="text-gray-400">Questions</span>
            </h2>
        </ScrollReveal>

        {/* Categories */}
        <ScrollReveal delay="0.1s" className="flex flex-wrap gap-4">
            {categories.map((cat) => (
                <button 
                    key={cat}
                    onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                    className={`px-6 py-2 rounded-full border text-sm md:text-base transition-all duration-300 transform hover:-translate-y-1 ${activeCategory === cat ? 'bg-[#292929] text-white border-[#292929]' : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'}`}
                >
                    {cat}
                </button>
            ))}
        </ScrollReveal>

        {/* Questions */}
        <div className="flex flex-col gap-4">
            {activeQuestions.map((item, index) => (
                <ScrollReveal key={index} delay={`${index * 0.05}s`} className="border-b border-gray-200">
                    <button 
                        onClick={() => toggleFAQ(index)}
                        className="w-full py-6 flex justify-between items-center text-left group focus:outline-none"
                    >
                        <span className={`text-xl md:text-2xl font-medium transition-colors duration-300 ${openIndex === index ? 'text-[#292929]' : 'text-gray-500 group-hover:text-[#292929]'}`}>
                            {item.q}
                        </span>
                        <div className={`relative w-6 h-6 transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-current -translate-y-1/2"></div>
                            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-current -translate-x-1/2"></div>
                        </div>
                    </button>
                    <div 
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
                    >
                        <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
                            {item.a}
                        </p>
                    </div>
                </ScrollReveal>
            ))}
        </div>
      </div>
    </section>
  );
}

// Export the data for Structured Data usage
export { faqData };
