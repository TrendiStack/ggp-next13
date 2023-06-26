import { Raleway } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Nav from './components/navigation/Nav';
import Footer from './components/Footer';
import Scrollbar from './components/Scrollbar';
import ClientOnly from './components/hydration/ClientOnly';
import LenisSmoothScroll from './components/LenisSmoothScroll';
import ScrollIcon from './components/icons/ScrollIcon';
import CartWrapper from './components/CartWrapper';

import './globals.css';

const raleway = Raleway({
  subsets: ['latin'],
});

export const metadata = {
  title: 'Gelato Gelato Pizzeria | Sicilian flavors in every scoop and slice',
  themeColor: '#ffd5c2',
  description: `Savor the authentic flavors of Italy at Gelato Gelato, located in
  the heart of Vaughan. Our menu is a celebration of Italian
  cuisine, featuring mouth-watering pasta dishes, wood-fired pizzas,
  and an irresistible variety of rich and creamy gelato flavors.
  From classic Margherita to decadent Nutella.`,
  url: 'https://www.gelatogelato.ca/',
  keywords: [
    'gelato',
    'pizza',
    'pasta',
    'Italian',
    'Italian food',
    'Italian restaurant',
    'Gelato Gelato',
    'Gelato Gelato Pizzeria',
    'Vaughan',
    'Woodbridge',
    'Toronto',
    'Ontario',
    'Canada',
  ],
  author: [{ name: 'Gelato Gelato Pizzeria', email: 'info@gelatogelato.ca' }],
  image:
    'https://gelatogelatobucket.s3.us-east-2.amazonaws.com/ggp-email-image.png',

  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.gelatogelato.ca/',
    title: 'Gelato Gelato Pizzeria',
    description: `Savor the authentic flavors of Italy at Gelato Gelato, located in
      the heart of Vaughan. Our menu is a celebration of Italian
      cuisine, featuring mouth-watering pasta dishes, wood-fired pizzas,
      and an irresistible variety of rich and creamy gelato flavors.
      From classic Margherita to decadent Nutella.`,
    defaultImageWidth: '1200',
    defaultImageHeight: '630',
    images: [
      {
        url: 'https://gelatogelatobucket.s3.us-east-2.amazonaws.com/ggp-email-image.png',
        width: '1200',
        height: '630',
        alt: 'Gelato Gelato Pizzeria logo',
      },
    ],
    site_name: 'Gelato Gelato Pizzeria',
  },

  twitter: {
    handle: '@gelatogelato',
    site: '@gelatogelato',
    cardType: 'summary_large_image',
    image: {
      url: 'https://gelatogelatobucket.s3.us-east-2.amazonaws.com/ggp-email-image.png',
      alt: 'Gelato Gelato Pizzeria logo',
      width: '1200',
      height: '630',
    },
    creator: '@gelatogelato',
  },

  icon: {
    href: 'favicon.ico',
  },

  icons: {
    icon: 'favicon.ico',
    shortcut: 'favicon.ico',
    apple: 'apple-touch-icon.png',
    favicons: [
      {
        href: 'favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        href: 'favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
  },

  manifest: '/site.webmanifest',

  robots: {
    inded: false,
    follow: true,
    nocache: true,
    googlebot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.className}`}>
        <Nav />
        <ClientOnly>
          <Toaster position="top-center" reverseOrder={false} />
          <ScrollIcon />
          <LenisSmoothScroll />
          <Scrollbar />
          <CartWrapper />
        </ClientOnly>
        {children}
        <Footer />
      </body>
    </html>
  );
}
