import UnanimatedMenu from './components/UnanimatedMenu';
export const metadata = {
  title: 'Menu | Gelato Gelato Pizzeria',
};

const page = () => {
  return (
    <main aria-label="Menu Page">
      <UnanimatedMenu />
    </main>
  );
};

export default page;
