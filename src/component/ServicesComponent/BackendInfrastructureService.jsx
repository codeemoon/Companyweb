import React, { useState } from 'react';
import ScrollReveal from '../ScrollReveal';

const BackendInfrastructureService = () => {
  const serviceItems = [
    {
      id: "01",
      title: "Architecture & Technical Strategy",
      description: "We take a strategic and modular approach to architecture and technical decisions in backend development, ensuring that systems are scalable, efficient, and resilient. We start by analyzing project requirements, business objectives, and expected workloads to determine the most suitable architecture patterns, whether it's a monolithic, microservices, or serverless approach. Our team carefully evaluates factors like data consistency, request throughput, and fault tolerance to design a backend that can handle both current and future demands.\n\nBy leveraging industry best practices and modern frameworks, we create robust, maintainable, and high-performance backend systems that align with long-term business goals. We have deep experience in a variety of programming languages (Node.js/TypeScript, Ruby, Go, Python) and frameworks (NestJS, Express, Fastify, Ruby on Rails, Django) and choose the right one based on the specific needs of the project. Additionally, we choose the right database architecture (SQL or NoSQL), caching mechanisms, and API design (RESTful or GraphQL) to ensure optimal performance. Our approach also emphasizes observability and automation, incorporating real-time monitoring, logging, and CI/CD pipelines to maintain smooth deployments and system health. Every decision we make is focused on long-term sustainability, adaptability, and high availability, allowing our backend solutions to support complex and evolving business needs."
    },
    {
      id: "02",
      title: "API Development & Integrations",
      description: "Building robust and efficient APIs is a critical part of backend development, allowing seamless communication between systems, applications, and third-party services. We design RESTful and GraphQL APIs that provide structured, high-performance data exchange while maintaining flexibility for various client-side applications. By following best practices in API versioning, rate limiting, and authentication (OAuth 2.0, JWT, API keys), we ensure that our APIs are not only reliable and secure but also future-proof as business needs evolve. Beyond development, we specialize in third-party API integrations also."
    },
    {
      id: "03",
      title: "Security & Compliance",
      description: "Prioritizing security and compliance by implementing proactive protection measures and regulatory best practices is a fundamental priority in backend development. Our approach starts with secure architecture design, ensuring that applications are built with strong authentication, data encryption, and access controls to protect sensitive information. We follow industry standards like OWASP and NIST to safeguard against common threats, including unauthorized access, data breaches, and malicious attacks. Additionally, we integrate automated security monitoring, logging, and regular vulnerability assessments to identify and mitigate risks before they impact system integrity."
    },
    {
      id: "04",
      title: "Scalability & Performance",
      description: "Designing backend systems that can handle growth efficiently is a core focus. We design systems that can efficiently handle increasing workloads and user demands by using scalable infrastructure, optimized databases, and efficient resource management. Our approach includes strategies like load balancing, caching, and asynchronous processing to improve responsiveness and prevent bottlenecks. By selecting the right architecture patterns and cloud services, we create backends that can expand seamlessly without compromising stability or efficiency. To enhance performance, we focus on efficient data handling, streamlined code execution, and proactive monitoring. We implement query optimization, in-memory storage, and event-driven workflows to reduce delays and improve overall system speed. Continuous performance tracking through logging, monitoring, and automated testing allows us to identify and resolve issues before they impact users. By combining scalable infrastructure with performance-focused development practices, we ensure that backend systems deliver smooth, high-quality experiences even as demands evolve over time."
    }
  ];

  const [activeId, setActiveId] = useState("01");

  return (
    <section id="backend-infrastructure" className="p-10">
      {/* Main Section */}
      <div className="mb-20">
        <h2 className="text-5xl md:text-7xl font-light text-[#292929] mb-8">
            Backend & Infrastructure
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl">
            We build scalable, secure, and high-performance backends, focusing on efficient architecture, integrations, and automation to ensure reliability and future growth.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        <ScrollReveal delay="0.2s" className="flex flex-col">
            {serviceItems.map((item) => (
                <BackendServiceItem 
                    key={item.id} 
                    item={item} 
                    isActive={activeId === item.id}
                    onHover={() => setActiveId(item.id)}
                />
            ))}
        </ScrollReveal>
      </div>
    </section>
  );
};

function BackendServiceItem({ item, isActive, onHover }) {
    return (
        <div 
            className="group cursor-pointer"
            onMouseEnter={onHover}
        >
            <div className={`flex flex-col items-start border-l-2 transition-colors duration-300 pl-8 py-10 ${
                isActive ? "border-[#292929]" : "border-gray-200 group-hover:border-[#292929]"
            }`}>
                <div className="flex items-baseline gap-6 w-full">
                    <span className="text-[#292929] opacity-40 font-manrope text-lg">
                        {item.id}
                    </span>
                    <h3 className="text-[#292929] font-manrope text-3xl md:text-4xl lg:text-5xl font-light group-hover:pl-4 transition-all duration-500">
                        {item.title}
                    </h3>
                </div>

                <div className={`overflow-hidden transition-all duration-700 ease-in-out pl-12 pr-4 ${
                    isActive ? "max-h-[800px] opacity-100 mt-6" : "max-h-0 opacity-0 mt-0 group-hover:max-h-[800px] group-hover:opacity-100 group-hover:mt-6"
                }`}>
                    <p className="text-[#292929] font-manrope text-lg leading-relaxed max-w-5xl whitespace-pre-line">
                        {item.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BackendInfrastructureService;
