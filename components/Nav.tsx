import Link from 'next/link';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi'

function Nav() {
    return (
        <nav className='flex container justify-between p-12 text-3xl'>
            <Link href='/' className='z-[2] text-xs flex flex-col'>
                <span className="font-bold">SYDNEY IDUNDUN</span><span>FULLSTACK ENGINEER</span>
            </Link>
            <button><i><GiHamburgerMenu /></i></button>
        </nav>
    );
}

export default Nav;