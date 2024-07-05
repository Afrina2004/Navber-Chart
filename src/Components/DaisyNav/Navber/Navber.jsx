import Link from "../Link/Link"
import { IoClose } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import {useState} from 'react'

const Navber = () => {

  const [open,setOpen] = useState (false)


    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About Us" },
        { id: 3, path: "/contact", name: "Contact" },
        { id: 4, path: "/services", name: "Our Services" },
        { id: 5, path: "/profile", name: "User Profile" },
      ];
      
      
      


    return (
        <nav className='text-black font-bold text-2xl bg-yellow-300 p-4 '>
          <div className='md:hidden text-2xl  ' onClick={() => setOpen(!open)}>
            {
                open === true ? 
                <IoClose></IoClose>
              : <RiMenu2Line className =""></RiMenu2Line>
            }
         
         
          </div> 
            <ul className={`md:flex absolute duration-1000 md:static 
                ${open ? 'top-12' : '-top-60'} bg-yellow-300 px-6 justify-center   `}>
{
    routes.map(route =><Link key={route.id} route = {route} ></Link>)
} 
</ul>   
        </nav>
    );
};

export default Navber;