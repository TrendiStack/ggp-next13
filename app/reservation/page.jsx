import Header from '../components/Header';
import ScrollIcon from '../components/icons/ScrollIcon';
import ReservationForm from '../components/ui/ReservationForm';

export const metadata = {
  title: 'Reservation | Gelato Gelato Pizzeria',
};

const page = () => {
  return (
    <div>
      <ScrollIcon />
      <Header route="Reservation" />
      <div className="mx-[5%] lg:mx-[2%] ">
        <ReservationForm />
      </div>
    </div>
  );
};

export default page;
