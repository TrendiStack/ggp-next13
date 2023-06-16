const RestaurantHours = () => {
  return (
    <section
      aria-label="Restaurant Hours"
      className="pt-[60vh] pb-32 font-light"
    >
      <div className="grid grid-cols-1 gap-14 lg:gap-36 2xl:gap-56">
        <div className="footer-header text-center">
          <h2>
            Find us every day at <br /> 3650 Langstaff Rd, <br /> Woodbridge, ON
          </h2>
        </div>
        <div className="container mx-auto px-[5%] lg:px-[2%]">
          <div className="flex flex-col gap-10 text-center">
            <h3 className="text-3xl md:text-5xl">Hour of Operation</h3>
            <ul
              aria-label="Hours of Operation"
              className="grid gap-3 text-xl md:text-3xl"
            >
              <li
                aria-label="Sunday"
                className="flex justify-between uppercase"
              >
                <p>sunday</p>
                <p>12:30 PM - 9:30 PM</p>
              </li>
              <li
                aria-label="Monday"
                className="flex justify-between uppercase"
              >
                <p>monday</p>
                <p className="w-[172px] md:w-[256px]">closed</p>
              </li>
              <li
                aria-label="Tuesday"
                className="flex justify-between uppercase"
              >
                <p>Tuesday</p>
                <p>11:00 AM - 9:30 PM</p>
              </li>
              <li
                aria-label="Wednesday"
                className="flex justify-between uppercase"
              >
                <p>Wednesday</p>
                <p>11:00 AM - 9:30 PM</p>
              </li>
              <li
                aria-label="Thursday"
                className="flex justify-between uppercase"
              >
                <p>Thursday</p>
                <p>11:00 AM - 9:30 PM</p>
              </li>
              <li
                aria-label="Friday"
                className="flex justify-between uppercase"
              >
                <p>Friday</p>
                <p>11:00 AM - 9:30 PM</p>
              </li>
              <li
                aria-label="Saturday"
                className="flex justify-between uppercase"
              >
                <p>Saturday</p>
                <p>11:00 AM - 9:30 PM</p>
              </li>
            </ul>
            <p
              aria-label="Dining closed"
              className="text-zinc-600 text-xl md:text-3xl"
            >
              *Dining closed from 3PM - 5PM*
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantHours;
