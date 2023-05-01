import { CgFacebook } from 'react-icons/cg';
import { AiOutlineInstagram } from 'react-icons/ai';
import { SiTripadvisor } from 'react-icons/si';
import { MenuContext } from '../../context/MenuContext';
import { useContext } from 'react';
import Link from 'next/link';

const SocialIcons = () => {
  const { menu } = useContext(MenuContext);
  const icons = [
    {
      name: 'Facebook',
      icon: <CgFacebook />,
      link: 'https://www.facebook.com/GelatoGelatoPizzeria/',
    },
    {
      name: 'Instagram',
      icon: <AiOutlineInstagram />,
      link: 'https://www.instagram.com/gelatogelatoinc/?hl=en',
    },
    {
      name: 'Tripadvisor',
      icon: <SiTripadvisor />,
      link: 'https://www.tripadvisor.ca/Restaurant_Review-g562671-d12870734-Reviews-Pizzeria_Gelato_Gelato-Woodbridge_Vaughan_Ontario.html',
    },
  ];

  return (
    <div className="flex gap-5">
      {icons.map(icon => (
        <Link
          key={icon.name}
          href={icon.link}
          target="_blank"
          rel="noreferrer"
          className={`${
            menu ? 'bg-white text-[#252422]' : 'bg-[#252422] text-white'
          } text-lg lg:text-3xl p-2 lg:p-8 rounded-full`}
        >
          {icon.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
