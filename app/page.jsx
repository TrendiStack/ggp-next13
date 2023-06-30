import Header from './components/Header';
import Banner from './components/landing/Banner';
import ImageReveal from './components/landing/ImageReveal';
import RestaurantHours from './components/landing/RestaurantHours';
import VideoSection from './components/landing/VideoSection';
import Contact from './components/landing/Contact';

export default function Home() {
  return (
    <main
      id="main-container"
      aria-label="Landing Page"
      className="overflow-hidden flex flex-col gap-y-36 lg:gap-y-52"
    >
      <Header route="landing" />
      <Banner />
      <VideoSection />
      <ImageReveal />
      <RestaurantHours />
      <Contact />
    </main>
  );
}
