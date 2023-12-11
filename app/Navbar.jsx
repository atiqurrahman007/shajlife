import React from 'react'
import Link from 'next/link'
import {FaUserLarge} from  'react-icons/fa6';

const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center bg-gray-500 h-14">
                <Link href="/">LOGO</Link>
                <ul>
                    <li><Link href="/shop">Shop</Link></li>
                </ul>
                <div>
                   <FaUserLarge />
                </div>
            </nav>
        </div>
    )
}

export default Navbar
