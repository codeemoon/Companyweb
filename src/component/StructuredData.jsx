
import { Helmet } from 'react-helmet-async';


import { useLocation } from 'react-router-dom';
import { faqData } from './FAQ'; // Import the data

const StructuredData = () => {
    const location = useLocation();
    const domain = "https://pillow-pi.vercel.app";

    // Dynamic Breadcrumbs
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const breadcrumbList = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": domain
            },
            ...pathSegments.map((segment, index) => ({
                "@type": "ListItem",
                "position": index + 2,
                "name": segment.charAt(0).toUpperCase() + segment.slice(1),
                "item": `${domain}/${pathSegments.slice(0, index + 1).join('/')}`
            }))
        ]
    };

    // Services Offered
    const services = [
        { name: "Mobile App Development", description: "Android & iOS apps" },
        { name: "Web Development", description: "Modern, responsive websites" },
        { name: "AI Solutions", description: "Artificial Intelligence & Machine Learning integration" },
        { name: "Backend Infrastructure", description: "Scalable server-side solutions" }
    ];

    // FAQ Schema
    // Flatten all questions for the schema
    const allQuestions = faqData.flatMap(cat => cat.questions);
    const faqPage = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": allQuestions.map(q => ({
            "@type": "Question",
            "name": q.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": q.a
            }
        }))
    };

    const localBusiness = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Pillow",
        "image": "/logo.svg",
        "description": "Premium software development company specializing in Mobile Apps, Web Development, and AI Solutions.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bhilai",
            "addressRegion": "Chhattisgarh",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "21.1938",
            "longitude": "81.3509"
        },
        "priceRange": "₹1000 - ₹10000",
        "areaServed": ["Bhilai", "Durg", "Prayagraj", "Jhunsi", "Chhattisgarh", "Uttar Pradesh", "Allahabad"],
        "telephone": "6392934409",
        "url": domain,
        "makesOffer": services.map(service => ({
            "@type": "Offer",
            "itemOffered": {
                "@type": "Service",
                "name": service.name,
                "description": service.description
            }
        }))
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [localBusiness, breadcrumbList, faqPage]
                })}
            </script>
        </Helmet>
    );
};

export default StructuredData;
