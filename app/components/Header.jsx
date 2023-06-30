import LandingHeader from './landing/LandingHeader';
import AlternativeHeader from './AlternativeHeader';

const Header = ({ route }) => {
  return (
    <header aria-label="Header" className="relative">
      {route === 'landing' ? (
        <LandingHeader />
      ) : (
        <AlternativeHeader route={route} />
      )}
    </header>
  );
};
export default Header;
