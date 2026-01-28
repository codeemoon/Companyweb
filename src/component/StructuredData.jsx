
import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Pillow",
        "image": "", // Add your logo URL here if available
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
        "areaServed": ["Bhilai", "Durg", "Prayagraj", "Jhunsi", "Chhattisgarh", "Uttar Pradesh"],
        "telephone": "", // Add contact number
        "url": "https://pillow.company" // Replace with actual domain
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(structuredData)}
            </script>
        </Helmet>
    );
};

export default StructuredData;
