import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name, type, keywords }) => {
return (
<Helmet>
{ /* Standard metadata tags */ }
<title>{title}</title>
<meta name='description' content={description} />
<meta name='keywords' content={keywords} />

{ /* End standard metadata tags */ }
{ /* Facebook tags */ }
<meta property="og:type" content={type} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
{ /* End Facebook tags */ }
{ /* Twitter tags */ }
<meta name="twitter:creator" content={name} />
<meta name="twitter:card" content={type} />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
{ /* End Twitter tags */ }
</Helmet>
)
}

SEO.defaultProps = {
    title: 'Pillow - Software & App Development Company',
    description: 'Pillow offers premium software, mobile app (Android/iOS), web development, and AI solutions in Bhilai, Durg, and Prayagraj. Expert teams, affordable pricing.',
    name: 'Pillow',
    type: 'website',
    keywords: 'Software Development, Mobile App Development, Web Design Bhilai, Android App, iOS App, AI Solutions, Backend Infrastructure, Pillow Company'
}

export default SEO;
