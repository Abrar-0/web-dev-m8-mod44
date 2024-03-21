import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";

const NavBar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { path: '/', id: 1, name: 'Home Page' },
        { path: '/about', id: 2, name: 'About Page' },
        { path: '/products', id: 3, name: 'Products Page' },
        { path: '/services', id: 4, name: 'Services Page' },
        { path: '/contact', id: 5, name: 'Contact Page' }
      ];

    return (
        <nav>
            <div className="md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ? 'open': 'close'
                }
                <HiMenuAlt1 className="text-4xl"/>
            </div>
            <ul className="md:flex">
            {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>
        </nav>
    );
};

export default NavBar;
