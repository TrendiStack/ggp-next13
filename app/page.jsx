'use client';
import Header from './components/Header';
import ScrollIcon from './components/icons/ScrollIcon';
import Banner from './components/landing/Banner';
import CakeMarquee from './components/landing/CakeMarquee';
import ImageReveal from './components/landing/ImageReveal';
import RestaurantHours from './components/landing/RestaurantHours';
import VideoSection from './components/landing/VideoSection';

export default function Home() {
  return (
    <main
      id="main-container"
      className="overflow-hidden flex flex-col gap-y-44 lg:gap-y-52 spartan bg-white"
    >
      <CakeMarquee />
      <Header route="landing" />
      <Banner />
      <VideoSection />
      <ImageReveal />
      <RestaurantHours />
      <ScrollIcon />
    </main>
  );
}
