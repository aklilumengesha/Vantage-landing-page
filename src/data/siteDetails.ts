export const siteDetails = {
    siteName: 'Vintage',
    siteUrl: typeof window !== 'undefined' ? window.location.origin : (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    metadata: {
        title: 'Vintage - Next.js and Tailwind CSS Landing Page Template',
        description: 'Vintage empowers businesses with cutting-edge technology solutions to drive success and efficiency.',
    },
    language: 'en-us',
    locale: 'en-US',
    siteLogo: `${process.env.BASE_PATH || ''}/images/logo.png`, // or use a string for the logo e.g. "TechStartup"
    googleAnalyticsId: '', // e.g. G-XXXXXXX,
}