import Link from 'next/link';

const MenuFooter = ({ menuItem, className }) => {
  return (
    <div className={`${className}`}>
      {menuItem ? (
        <ul className="grid grid-cols-1 lg:flex gap-2 lg:gap-5">
          <li>
            <Link
              href="https://www.google.com/maps?ll=43.808928,-79.54804&z=17&t=m&hl=en-US&gl=US&mapclient=embed&cid=16934071278796745487"
              target="_blank"
            >
              3650 Langstaff Rd Woodbridge, ON
            </Link>
          </li>
          <li>
            <Link href="tel:+1 905-851-0400">(905) 851-0400</Link>
          </li>
        </ul>
      ) : (
        <ul className="flex gap-5 ">
          <li>
            <Link href="/menu">Menu</Link>
          </li>
          <li>
            <Link
              href="https://www.google.com/maps?ll=43.808928,-79.54804&z=17&t=m&hl=en-US&gl=US&mapclient=embed&cid=16934071278796745487"
              target="_blank"
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
