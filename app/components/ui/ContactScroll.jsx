import menuStore from '../../../stores/menuStore';
import useScrolling from '../../../stores/scrollingStore';

const ContactScroll = () => {
  const { setMenu } = menuStore();
  const setScrollToContact = useScrolling(state => state.setScrollToContact);
  return (
    <li
      aria-label="Contact"
      title="Contact Us"
      onClick={() => {
        setMenu(false);
        setScrollToContact(true);
        setTimeout(() => {
          setScrollToContact(false);
        }, 100);
      }}
      className="cursor-pointer"
    >
      Contact
    </li>
  );
};

export default ContactScroll;
