import { AiOutlineInstagram, AiOutlineGoogle } from 'react-icons/ai';
import { CgFacebook } from 'react-icons/cg';
import { FaTripadvisor } from 'react-icons/fa';
import Link from 'next/link';
import menuStore from '../../../stores/menuStore.js';

const SocialIcons = () => {
  const { menu } = menuStore();
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
      icon: <FaTripadvisor />,
      link: 'https://www.tripadvisor.ca/Restaurant_Review-g562671-d12870734-Reviews-Pizzeria_Gelato_Gelato-Woodbridge_Vaughan_Ontario.html',
    },
  ];

  return (
    <div className="flex gap-5">
      {icons.map(icon => (
        <Link
          title={icon.name}
          key={icon.name}
          href={icon.link}
          target="_blank"
          rel="noreferrer"
          className={`${
            menu ? ' text-lg lg:text-3xl p-2 lg:p-8' : ''
          } text-lg p-2 lg:p-4 bg-white text-[#252422] hover:text-white rounded-full hover:bg-[#a3a380] transition-colors duration-300 ease-in-out `}
        >
          {icon.icon}
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
