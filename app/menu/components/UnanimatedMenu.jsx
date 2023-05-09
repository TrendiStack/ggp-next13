import FlavourButton from './FlavourButton';
import FlavourContainer from './FlavourContainer';
import FlavourSelect from './FlavourSelect';
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';
import ScrollAlert from './ScrollAlert';
import useMobile from '@/app/hooks/useMobile';

const UnanimatedMenu = ({ selected, setSelected }) => {
  const isMobile = useMobile();

  return (
    <div className="overflow-hidden lg:hidden">
      {!isMobile && <ScrollAlert />}
      <Header route="Our Menu" />
      <div className="flex flex-col gap-20 pt-10">
        <FlavourContainer header="gelato - flavours">
          <div className="grid grid-cols-2 text-center gap-5">
            <FlavourButton
              selected={selected.categoryOne}
              setSelected={setSelected}
              category="regular"
              type="gelato"
            />
            <FlavourButton
              selected={selected.categoryOne}
              setSelected={setSelected}
              category="sorbet"
              type="gelato"
            />
            <FlavourButton
              selected={selected.categoryOne}
              setSelected={setSelected}
              category="soy"
              type="gelato"
            />
          </div>
          <FlavourSelect selected={selected.categoryOne} type="gelato" />
        </FlavourContainer>
        <FlavourContainer header="dining - options">
          <div className="grid grid-cols-2 gap-5">
            <FlavourButton
              selected={selected.categoryTwo}
              setSelected={setSelected}
              category="pizza"
            />
            <FlavourButton
              selected={selected.categoryTwo}
              setSelected={setSelected}
              category="pasta"
            />
            <FlavourButton
              selected={selected.categoryTwo}
              setSelected={setSelected}
              category="antipasti"
            />
            <FlavourButton
              selected={selected.categoryTwo}
              setSelected={setSelected}
              category="insalate"
            />
            <FlavourButton
              selected={selected.categoryTwo}
              setSelected={setSelected}
              category="meat"
            />
          </div>
          <FlavourSelect selected={selected.categoryTwo} type="dining" />
        </FlavourContainer>
      </div>
    </div>
  );
};

export default UnanimatedMenu;
