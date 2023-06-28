import Header from './components/Header';
import Banner from './components/landing/Banner';
import CakeMarquee from './components/landing/CakeMarquee';
import ImageReveal from './components/landing/ImageReveal';
import RestaurantHours from './components/landing/RestaurantHours';
import VideoSection from './components/landing/VideoSection';

export default function Home() {
  return (
    <main
      id="main-container"
      aria-label="Landing Page"
      className="overflow-hidden flex flex-col gap-y-44 lg:gap-y-52 bg-white"
    >
      <Header route="landing" />
      <Banner />
      <VideoSection />
      <ImageReveal />
      <RestaurantHours />
    </main>
  );
}
