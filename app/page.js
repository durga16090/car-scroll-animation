import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import HomeServices from '../components/HomeServices';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <HomeServices />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
