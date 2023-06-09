import Link from 'next/link';
import ContactScroll from '../ui/ContactScroll';

const MenuFooter = ({ menuItem, className }) => {
  return (
    <div className={`${className}`}>
      {menuItem ? (
        <div className="grid grid-cols-1 lg:flex gap-2 lg:gap-5">
          <Link
            href="https://www.google.com/maps?ll=43.808928,-79.54804&z=17&t=m&hl=en-US&gl=US&mapclient=embed&cid=16934071278796745487"
            target="_blank"
            title="Location"
          >
            3650 Langstaff Rd <br className="md:hidden" />
            Woodbridge, ON
          </Link>

          <Link href="tel:+1 905-851-0400" title="Phone Number">
            (905) 851-0400
          </Link>
        </div>
      ) : (
        <ul aria-label="Footer Menu" className="flex flex-col gap-5 mb-5">
          <li>
            <Link href="/menu" title="Product Menu">
              Menu
            </Link>
          </li>
          <li>
            <Link href="/order-cake" title="Order Cake">
              Order
            </Link>
          </li>
          <ContactScroll />
          <li>
            <Link
              href="https://www.google.com/maps?ll=43.808928,-79.54804&z=17&t=m&hl=en-US&gl=US&mapclient=embed&cid=16934071278796745487"
              target="_blank"
              title="Google Maps"
            >
              Location
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MenuFooter;
