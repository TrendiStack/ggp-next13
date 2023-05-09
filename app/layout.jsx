import { League_Spartan } from 'next/font/google';
import Nav from './components/navigation/Nav';
import Footer from './components/Footer';
import Scrollbar from './components/Scrollbar';
import ClientOnly from './components/hydration/ClientOnly';
import LenisSmoothScroll from './components/LenisSmoothScroll';

import './globals.css';

const spartan = League_Spartan({ subsets: ['latin'] });

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
    'https://bobward-image-bucket.s3.ca-central-1.amazonaws.com/ggpmetaimage.png',

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
        url: 'https://bobward-image-bucket.s3.ca-central-1.amazonaws.com/ggplogo_with_bg.png',
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
      url: 'https://bobward-image-bucket.s3.ca-central-1.amazonaws.com/ggplogo_with_bg.png',
      alt: 'Gelato Gelato Pizzeria logo',
      width: '1200',
      height: '630',
    },
    creator: '@gelatogelato',
  },

  // facebook: {
  //   appId: 'GelatoGelatoPizzeria',
  // },

  // googleAnalytics: {
  //   id: 'UA-206896-1',
  // },

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
      <body className={`${spartan.className}`}>
        <Nav />
        <ClientOnly>
          <LenisSmoothScroll />
          <Scrollbar />
        </ClientOnly>
        {children}
        <Footer />
      </body>
    </html>
  );
}
